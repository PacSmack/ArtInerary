const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Image model
class Image extends Model {
    static like(body, models) {
        return models.Like.create({
            user_id: body.user_id,
            image_id: body.image_id
        }).then(() => {
            return Image.findOne({
                where: {
                    id: body.image_id
                },
                attributes: [
                    'id',
                    'image_url',
                    'title',
                    [sequelize.literal('(SELECT COUNT(*) FROM like WHERE image.id = image_id)'), 'like_count']
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

// create fields/columns for Image model
Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image_url: {
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
        },
        reference_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'reference',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'image'
    }
);

module.exports = Image;
