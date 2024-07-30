// server/routes/postRoutes.js

const express = require('express');
const { fetchPosts } = require("../services/postService");
const router = express.Router();


// 컨트롤러 로직 통합
const getPosts = async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 라우터 설정
router.get('/', getPosts);

module.exports = router;