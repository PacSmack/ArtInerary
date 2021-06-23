const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Reference model
class Reference extends Model {}

// create fields/columns for reference model
Reference.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reference_url: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isURL: true
            }
        }        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'reference'
    }
);

module.exports = Reference;
