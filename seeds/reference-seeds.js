const { Reference } = require('../models');

const referencedata = [
    {
        title: 'Mona Lisa Original ',
        reference_url: 'http://placekitten.com/200/147'
    },
    {
        title: 'Fred & Jessi Original',
        reference_url: 'http://placekitten.com/147/300'
    },
    {
        title: 'Starry Night Original',
        reference_url: 'http://placekitten.com/1123/300'
    },
    {
        title: 'The Aesthetics of an Orage Original',
        reference_url: 'http://placekitten.com/100/300'
    },
    {
        title: 'Self-Portrait 1,909,000 Original',
        reference_url: 'http://placekitten.com/300/300'
    }
];

const seedReferences = () => Reference.bulkCreate(referencedata);

module.exports = seedReferences;
