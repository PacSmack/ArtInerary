const Sequelize = require('sequelize');

require('dotenv').config();

// // create connection to our db
// const sequelize = process.env.JAWSDB_URL
//     ? new Sequelize(process.env.JAWSDB_URL)
//     : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306
//     });

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}



module.exports = sequelize;
module.exports = {
    HOST: "us-cdbr-east-04.cleardb.com",
    USER: "bc077bd9d6ef3f",
    PASSWORD: "e328434f",
    DB: "heroku_da32db393f0b6c1"
};
