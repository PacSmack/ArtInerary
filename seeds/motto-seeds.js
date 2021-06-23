const { Motto } = require('../models');

const mottoData = [
    {
        catchphrase: "I love art",
        user_id: "5"
    }
];

const seedMotto = () => Motto.bulkCreate(mottoData);

module.exports = seedMotto;
