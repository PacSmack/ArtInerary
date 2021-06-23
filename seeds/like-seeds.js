const { Like } = require('../models');

const likedata = [
    {
        user_id: 1,
        image_id: 2
    },
    {
        user_id: 2,
        image_id: 3
    },
    {
        user_id: 3,
        image_id: 1
    }
];

const seedLikes = () => Like.bulkCreate(likedata);

module.exports = seedLikes;