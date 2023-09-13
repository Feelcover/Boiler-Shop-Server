'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BoilerParts extends Model {
    static associate(models) {
      // define association here
    }
  }
  BoilerParts.init(
    {
      boiler_manufacturer: DataTypes.boiler.STRING,
      price: DataTypes.boiler.INTEGER,
      parts_manufacturer: DataTypes.boiler.STRING,
      article_code: DataTypes.boiler.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      images: DataTypes.STRING,
      in_stock: DataTypes.INTEGER,
      bestsellers: DataTypes.BOOLEAN,
      new: DataTypes.BOOLEAN,
      popularity: DataTypes.INTEGER,
      compatibility: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'BoilerParts',
    },
  );
  return BoilerParts;
};
