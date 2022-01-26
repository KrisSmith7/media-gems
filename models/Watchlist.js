const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create class
class Watchlist extends Model {}

// create columns for table
Watchlist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1]
      }
    },
    service: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1]
      }
    },
user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
},
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'watchlist'
  }
  );

// export
module.exports = Watchlist;