const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Reference model
class Reference extends Model {
    static like(body, models) {
        return models.Like.create({
            user_id: body.user_id,
            reference_id: body.reference_id
        }).then(() => {
            return Reference.findOne({
                where: {
                    id: body.reference_id
                },
                attributes: [
                    'id',
                    'reference_url',
                    'title',
                    [sequelize.literal('(SELECT COUNT(*) FROM like WHERE reference.id = like.reference_id)'), 'like_count']
                ],
                include: [
                    {
                        model: models.User,
                        attributes: ['username']
                    }
                ]
            });
        });
    }
}

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
        modelName: 'reference'
    }
);

module.exports = Reference;
