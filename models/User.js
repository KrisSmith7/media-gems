// import
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create class
class Review extends Model {}

// create columns for table
Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        },
        last_visit: {
            type: DataTypes.DATEONLY,
            references: {
                model: 'visited',
                key: 'id'
            }
        },
        reviews: {
            type: DataTypes.STRING,
            references: {
                model: 'review',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

// export
module.exports = Comment;