require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

const connection = require("./database/connection");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;
const HOST = process.env.HOST;

connection
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

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

const upload = multer({ storage });

const FileSchema = new mongoose.Schema({
  author: String,
  text: String,
  filename: String,
  path: String,
  contentType: String,
});

const File = mongoose.model("File", FileSchema);

app.use("/uploads", express.static("uploads"));

app.post("/upload", upload.single("file"), async (req, res) => {
  const { author, text } = req.body;
  const file = req.file;
  if (!file) {
    return res.status(400).send("Please upload a file");
  }

  const newFile = new File({
    author,
    text,
    filename: file.filename,
    path: file.path,
    contentType: file.mimetype,
  });

  await newFile.save();
  console.log("File uploaded successfully \n", newFile);
  res.send("File uploaded successfully");
});

app.get("/files", async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (err) {
    console.error("Error fetching files:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// index page, hello world
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST, () => {
  console.log("Server is running on port " + PORT);
});
