'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }  
  Article.init({
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    availabelUnits: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};