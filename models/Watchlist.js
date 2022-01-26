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
      type: DataTypes.INTEGER,
      references: {
        model: 'review',
        key: 'id'
      }
    },
    // service: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'service',
    //     key: 'id'
    //   },
    // },
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