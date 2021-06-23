const seedUsers = require('./user-seeds');
const seedImages = require('./image-seeds');
const seedReferences = require('./reference-seeds');
const seedLikes = require('./like-seeds');
const seedMotto = require('./motto-seeds')

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');

    await seedImages();
    console.log('--------------');

    await seedReferences();
    console.log('--------------');

    await seedLikes();
    console.log('--------------');

    await seedMotto();
    console.log('--------------')

    process.exit(0);
};

seedAll();
