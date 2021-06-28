const router = require('express').Router();
const sequelize = require('../config/connection');
const { Image, User, Like, Reference } = require('../models');

// render homepage
router.get('/', (req, res) => {
    console.log(req.session);
    Reference.findAll({
        attributes: [
            'id',
            'title',
            'reference_url',
            //[sequelize.literal('(SELECT COUNT(*) FROM LIKE WHERE image.id = like.image_id)'), 'like_count']                   
        ],
        include: [
            {
                model: Image,
                attributes: ['id', 'title', 'image_url', 'user_id']
            }
        ]
    })
        .then(dbImageData => {
            const images = dbImageData.map(image => image.get({ plain: true }))
            res.render('homepage', {
                images,
                loggedIn: req.session.loggedIn

            }); console.log(images)
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

router.get('/image/:id', (req, res) => {
    Reference.findOne({
        where: {
            id: req.params.id
        }, 
        attributes: [
            'id',
            'title',
            'reference_url',
            //[sequelize.literal('(SELECT COUNT(*) FROM LIKE WHERE image.id = like.image_id)'), 'like_count']                   
        ],
        include: [
            {
                model: Image,
                attributes: ['id', 'title', 'image_url', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
        .then(dbImageData => {
            if (!dbImageData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const image = dbImageData.get({ plain: true })

            res.render('single-image', {
                image,
                loggedIn: req.session.loggedIn
            });console.log(image)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});




module.exports = router;