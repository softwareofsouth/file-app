// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const { createPost } = require('../controllers/post.controllers');
const upload = require('../middlewares/upload');

router.post('/posts', upload.single('file'), createPost);

module.exports = router;