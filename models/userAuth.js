'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userAuth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userAuth.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isVerified: DataTypes.BOOLEAN,
      isBlocked: DataTypes.BOOLEAN,
      loginAttempts: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'userAuth',
      tableName: 'user_auth',
      paranoid: true,
    }
  );
  return userAuth;
};
