const express = require('express');
const { Op } = require('sequelize');

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

router.get('/search', async (req, res, next) => {
  try {
    const keyword = req.query.s;
    const result = await Post.findAll({
      where: {
        [Op.or]: [{
          title: {
            [Op.like]: `%${keyword}%`,
          }
        }, {
          content: {
            [Op.like]: `%${keyword}%`,
          },
        }],
      },
    });
    console.log(result);
    if (result.length >= 1) {
      return res.json(result);
    }
    return res.json('일치하는 결과가 없습니다.');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
