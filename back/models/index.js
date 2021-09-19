const { Sequelize } = require('sequelize');
const config = require('../config/config')['development'];

const User = require('./user');
const Post = require('./post');
const Thumbnail = require('./thumbnail');
const Image = require('./image');

const sequelize = new Sequelize(
  config.database, config.username, config.password, {...config, logging: false, }
);

const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Post = Post;
db.Thumbnail = Thumbnail;
db.Image = Image;

User.init(sequelize);
Post.init(sequelize);
Thumbnail.init(sequelize);
Image.init(sequelize);

User.associate(db);
Post.associate(db);
Thumbnail.associate(db);
Image.associate(db);

module.exports = db;
