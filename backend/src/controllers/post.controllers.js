const Post = require('../models/post.model');

const createPost = async (req, res) => {
  const { text, author } = req.body;
  const photoUrl = req.file ? req.file.path : null;

  const newPost = new Post({
    text,
    author,
    photoUrl,
    videoUrl: null
  });

  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createPost
};