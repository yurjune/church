const express = require('express');
const { Post } = require('../models');
const router = express.Router();

// 게시글 작성
router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      UserId: req.body.id,
    });
    res.json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
