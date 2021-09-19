const Sequelize = require('sequelize');

module.exports = class Thumbnail extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      src: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Thumbnail',
      tableName: 'thumbnails',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    db.Thumbnail.belongsTo(db.Post);
  }
};