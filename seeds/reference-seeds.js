const { Reference } = require('../models');

const referencedata = [
    {
        title: 'Mona Lisa Original ',
        post_url: 'http://placekitten.com/200/147',
        user_id: 1
    },
    {
        title: 'Fred & Jessi Original',
        post_url: 'http://placekitten.com/147/300',
        user_id: 1
    },
    {
        title: 'Starry Night Original',
        post_url: 'http://placekitten.com/1123/300',
        user_id: 1
    },
    {
        title: 'The Aesthetics of an Orage Original',
        post_url: 'http://placekitten.com/100/300',
        user_id: 1
    },
    {
        title: 'Self-Portrait 1,909,000 Original',
        post_url: 'http://placekitten.com/300/300',
        user_id: 2
    }
];

const seedReferences = () => Reference.bulkCreate(referencedata);

module.exports = seedReferences;
