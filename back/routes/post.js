const express = require('express');
const multer = require('multer');
const path = require('path');
const { Post, Image } = require('../models');

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

// 게시글 작성
router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
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
    res.json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// 게시글 로드
router.get('/', async (req, res, next) => {
  try {
    console.log(req.query);
    const post = await Post.findOne({
      where: {
        id: req.query.id,
        category: req.query.category,
      },
      include: [{
        model: Image,
        attributes: ['src'],
      }],
    });
    res.json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// router.post('/images', upload.array('image'), (req, res, next) => {
//   console.log('req.files:', req.files);
//   const files = req.files.map((file) => file.filename);
//   res.json(files);
// });

router.post('/image', upload.single('image'), (req, res, next) => {
  console.log(req.file);
  const fileName = req.file.filename;
  res.json(fileName);
});

module.exports = router;
