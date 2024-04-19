const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  text: String,
  author: String,
  photoUrl: String,
  videoUrl: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;