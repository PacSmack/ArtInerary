const router = require('express').Router();
const sequelize = require('../config/connection');

// render homepage
router.get('/', (req, res) => {
    res.render('homepage');
})

module.exports = router;