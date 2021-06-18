const { Image } = require('../models');

const imagedata = [
    {
        title: 'Mona Lisa',
        post_url: 'http://placekitten.com/200/300',
        user_id: 1
    },
    {
        title: 'Fred & Jessi',
        post_url: 'http://placekitten.com/200/300',
        user_id: 2
    },
    {
        title: 'Starry Night',
        post_url: 'http://placekitten.com/200/300',
        user_id: 3
    },
    {
        title: 'The Aesthetics of an Orage',
        post_url: 'http://placekitten.com/200/300',
        user_id: 1
    },
    {
        title: 'Self-Portrait 1,909,000',
        post_url: 'http://placekitten.com/200/300',
        user_id: 2
    }
];

const seedImages = () => Image.bulkCreate(imagedata);

module.exports = seedImages;
