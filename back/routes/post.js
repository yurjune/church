const express = require('express');
const { Op } = require('sequelize');
const multer = require('multer');
const path = require('path');
const { Post, User, Image, Thumbnail } = require('../models');

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + '_' + new Date().getTime() + ext);
    }
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

router.post('/thumbnail', upload.single('image'), (req, res, next) => {
  console.log(req.file);
  const fileName = req.file.filename;
  res.json(fileName);
});

router.post('/image', upload.single('image'), (req, res, next) => {
  console.log(req.file);
  const fileName = req.file.filename;
  res.json(fileName);
});

// 게시글 작성
router.post('/', async (req, res, next) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      category: req.body.category,
      content: req.body.content,
      UserId: req.body.id,
    });
    if (req.body.image.length >= 1) {  // 이미지 첨부된 경우
      if (req.body.image.length >= 2) {
        const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
        await post.addImages(images);
      } else {
        const image = await Image.create({ src: req.body.image[0] });
        await post.addImages(image);
      }
    }
    if (req.body.thumbnail) {
      const thumbnail = await Thumbnail.create({ src: req.body.thumbnail });
      await post.addThumbnails(thumbnail);
    }
    res.json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// 게시글 로드
router.get('/', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.query.id,
        category: req.query.category,
      },
      include: [{
        model: User,
        attributes: ['id'],
      },],
    });
    res.json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/latest', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        category: req.query.category,
      },
      limit: 1,
      order: [['createdAt' , 'DESC']],
      include: [{
        model: User,
        attributes: ['id'],
      },],
    });
    res.json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/prev', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        category: req.query.category,
        id: { [Op.lt]: parseInt(req.query.id, 10) },
      },
      limit: 1,
      order: [['createdAt' , 'DESC']],
      attributes: ['id'],
    });
    if (!post) {
      res.status(403).send('게시글 없음');
    }
    res.json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/next', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        category: req.query.category,
        id: { [Op.gt]: parseInt(req.query.id, 10) },
      },
      limit: 1,
      order: [['createdAt' , 'ASC']],
      attributes: ['id'],
    });
    if (!post) {
      res.status(403).send('게시글 없음');
    }
    res.json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// 수정할 게시글 로드
router.get('/:postId', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
      include: [{
        model: Image,
        attributes: ['src'],
      }, {
        model: Thumbnail,
        attributes: ['src'],
      }],
    });
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.');
    }
    res.json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.patch('/:postId', async (req, res, next) => {
  try {
    await Post.update({
      title: req.body.title,
      category: req.body.category,
      content: req.body.content,
      UserId: req.body.userId,
    }, {
      where: { id: req.params.postId },
    });
    const post = await Post.findOne({
      where: { id: req.params.postId },
      attributes: ['id', 'category'],
    });
    if (req.body.image.length >= 1) {
      if (req.body.image.length >= 2) {
        const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
        await post.addImages(images);
      } else {
        const image = await Image.create({ src: req.body.image[0] });
        await post.addImages(image);
      }
    }
    if (req.body.thumbnail) {
      await Thumbnail.destroy({ where: { postId: req.params.postId } });
      const thumbnail = await Thumbnail.create({ src: req.body.thumbnail });
      await post.addThumbnails(thumbnail);
    }
    res.json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete('/:postId', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.');
    }
    const result = await Post.destroy({
      where: { id: req.params.postId },
    });
    await Image.destroy({
      where: { postId: req.params.postId }
    });
    await Thumbnail.destroy({
      where: { postId: req.params.postId }
    });
    res.json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
