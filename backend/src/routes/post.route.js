const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.post('/posts', async (req, res) => {
  const { text, author } = req.body;
  const photoUrl = req.file ? req.file.path : null; // Assuming 'photo' is the name of the file input field

  const newPost = new Post({
    text,
    author,
    photoUrl,
    videoUrl: null // You can add logic here to handle video uploads
  });

  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;