// import all models
const Image = require('./Image');
const User = require('./User');
const Like = require('./Like');
const Reference = require('./Reference');

// create associations

User.hasMany(Image, {
    foreignKey: 'user_id'
});

Image.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.belongsToMany(Image, {
    through: Like,
    as: 'liked_Images',

    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Image.belongsToMany(User, {
    through: Like,
    as: 'liked_images',
    foreignKey: 'image_id',
    onDelete: 'SET NULL'
});

Like.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Like.belongsTo(Image, {
    foreignKey: 'image_id',
    onDelete: 'SET NULL'
});

User.hasMany(Like, {
    foreignKey: 'user_id'
});

Image.hasMany(Like, {
    foreignKey: 'image_id'
});

// Reference.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

// Reference.belongsTo(Image, {
//     foreignKey: 'image_id',
//     onDelete: 'SET NULL'
// });

User.hasMany(Reference, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Image.belongsTo(Reference, {
    foreignKey: 'reference_id',
});

// Reference.hasMany(User, {
//     foreignKey: 'user_id'

// });

Reference.hasMany(Image, {
    foreignKey: 'image_id'
});


module.exports = { User, Image, Like, Reference };
