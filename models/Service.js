// import
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create class
class Service extends Model {}

// create columns for table
Service.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        service_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        } 
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'service'
    }
);

// export
module.exports = Service;