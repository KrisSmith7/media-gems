// import
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create class
class UserService extends Model {}

// create columns for table
UserService.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        review_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'review',
                key: 'id'
            }
        },
        service_id: {
            type: DataTypes.INTEGER,
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
        modelName: 'userService'
    }
);

// export
module.exports = UserService;