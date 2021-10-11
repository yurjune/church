const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

const { Post, Thumbnail, User, Image } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    const where = {};
    if (req.query.category === "예배와 말씀") {
      where.category = {
        [Op.or]: ['주일예배', '수요예배'],
      }
    } else {
      where.category = req.query.category;
    }
    const results = await Post.findAll({
      where,
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
    if (!result) {
      return res.json(1);
    }
    return res.json(result);
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
      order: [['createdAt' , 'DESC']],
      include: [{
        model: User,
        attributes: ['id'],
      }],
    });
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
