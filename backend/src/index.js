const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3001;

// Set storage engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload
const upload = multer({
  storage: storage
}).single('file'); // 'file' should match the name attribute in your form

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      console.log(req.file);
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
