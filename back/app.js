const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();
const indexRouter = require('./routes/index');

const { sequelize } = require('./models/index'); // db.sequelize

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((error) => {
    console.error(error);
  });

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(3060, () => {
  console.log('3060번 포트에서 대기중');
});
