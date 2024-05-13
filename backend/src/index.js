require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

const archiver = require("archiver");

const config = require("./config");
const connection = require("./database/connection");
// setup express
const app = express();
// accept json data
app.use(express.json());
// cors configuration
app.use(
  cors({
    origin: config.clientUri,
  })
);
// db connection
connection;
// multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads/";
    fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});
// upload middleware
const upload = multer({ storage });
// file schema model
const FileSchema = new mongoose.Schema({
  author: String,
  text: String,
  filename: String,
  path: String,
  contentType: String,
});
const File = mongoose.model("File", FileSchema);
// routes upload
app.use("/uploads", express.static("uploads"));
app.post("/upload", upload.single("file"), async (req, res) => {
  const { author, text } = req.body;
  const file = req.file;
  if (!file) {
    return res.status(400).send("Please upload a file");
  }
  // save file to database
  const newFile = new File({
    author,
    text,
    filename: file.filename,
    path: file.path,
    contentType: file.mimetype,
  });
  //save file to database
  await newFile.save();
  console.log("File uploaded successfully \n", newFile);
  res.send("File uploaded successfully");
});
// routes send files
app.get("/files", async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (err) {
    console.error("Error fetching files:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/download/all", async (req, res) => {
  try {
    const files = await File.find();

    const archive = archiver("zip", {
      zlib: { level: 9 }, // set compression level
    });

    res.attachment("files.zip"); // set the file name for the client to download

    archive.pipe(res);

    files.forEach((file) => {
      archive.append(fs.createReadStream(file.path), { name: file.filename });
    });

    archive.finalize();
  } catch (err) {
    console.error("Error downloading files:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// check server
app.get("/check", (req, res) => {
  res.json({ message: "Serve is working =D" });
});
// start server
app.listen(5000, () => {
  console.log("Server is running on port " + 5000);
});
