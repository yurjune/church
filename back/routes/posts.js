const express = require('express');
const { Post, Thumbnail, User, Image } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const results = await Post.findAll({
      where: { category: req.query.category },
      limit: 12,
      offset: 12 * (req.query.page - 1),
      order: [
        ['createdAt' , 'DESC'],
      ],
      include: [{
        model: Thumbnail,
        attributes: ['src'],
      }, {
        model: User,
        attributes: ['id'],
      }],
    });
    res.json(results);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/total', async (req, res, next) => {
  try {
    const result = await Post.count({
      where: { category: req.query.category },
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
