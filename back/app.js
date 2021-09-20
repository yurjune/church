const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

dotenv.config();
const indexRouter = require('./routes/index');
const postRouter = require('./routes/post');

const { sequelize } = require('./models/index'); // db.sequelize

// sequelize.drop();
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((error) => {
    console.error(error);
  });

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));


app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));


app.use('/', indexRouter);
app.use('/post', postRouter);

app.listen(3060, () => {
  console.log('3060번 포트에서 대기중');
});
