// import
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create class
class Connect extends Model {}

// create columns for table
Connect.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        service_id: {
            type: DataTypes.STRING,
            references: {
                model: 'service',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'connect'
    }
);

// export
module.exports = Connect;