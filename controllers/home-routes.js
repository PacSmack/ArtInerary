const router = require('express').Router();
const sequelize = require('../config/connection');
const { Image, User, Reference } = require('../models');

// render homepage
router.get('/', (req, res) => {
    console.log(req.session);
    Image.findAll({
        attributes: [
            'id',
            'title',
            'image_url', 
            //[sequelize.literal('(SELECT COUNT(*) FROM LIKE WHERE image.id = like.image_id)'), 'like_count']                   
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbImageData => {
        const images = dbImageData.map(image => image.get({ plain: true }))
        res.render('homepage', {
            images,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return
    }
    res.render('login');
});





module.exports = router;