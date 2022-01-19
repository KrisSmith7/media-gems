// import
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create class
class Visited extends Model {}

// create columns for table
Visited.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        last_visited_date: {
            type: DataTypes.STRING,
        } 
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'visited'
    }
);

// export
module.exports = Visited;