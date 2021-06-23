const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Motto extends Model {}

Motto.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },        
        catchphrase: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'motto'
    }
);

module.exports = Motto;