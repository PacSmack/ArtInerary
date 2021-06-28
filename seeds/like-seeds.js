const { Like } = require('../models');

const likedata = [
    {
        user_id: 1,
        image_id: 19
    },
    {
        user_id: 2,
        image_id: 8
    },
    {
        user_id: 3,
        image_id: 12
    }
];

const seedLikes = () => Like.bulkCreate(likedata);

module.exports = seedLikes;