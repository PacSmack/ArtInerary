const { Image } = require('../models');

const imagedata = [
    {
        title: 'Mona Lisa',
        image_url: 'http://placekitten.com/200/300',
        user_id: 1
    },
    {
        title: 'Fred & Jessi',
        image_url: 'http://placekitten.com/200/300',
        user_id: 2
    },
    {
        title: 'Starry Night',
        image_url: 'http://placekitten.com/200/300',
        user_id: 3
    },
    {
        title: 'The Aesthetics of an Orage',
        image_url: 'http://placekitten.com/200/300',
        user_id: 1
    },
    {
        title: 'Self-Portrait 1,909,000',
        image_url: 'http://placekitten.com/200/300',
        user_id: 2
    }
];

const seedImages = () => Image.bulkCreate(imagedata);

module.exports = seedImages;
