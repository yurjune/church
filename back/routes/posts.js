const express = require('express');
const { Post, Thumbnail, User, Image } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const results = await Post.findAll({
      where: { category: req.query.category },
      limit: 12,
      order: [
        ['createdAt' , 'DESC'],
      ],
      include: [{
        model: Thumbnail,
        attributes: ['id'],
      }, {
        model: Image,
      },{
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

module.exports = router;
