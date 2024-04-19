const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  text: String,
  author: String,
  photoUrl: String,
  videoUrl: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;