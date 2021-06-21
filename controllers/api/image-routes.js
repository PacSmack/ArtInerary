const router = require('express').Router();
const { User, Image } = require('../../models');
const sequelize = require('../../config/connection');

/*not working // user not associated to image model */
router.get('/', (req, res) => {
    console.log('=====================');
    Image.findAll({
        attributes: [
            'id', 'title', 'image_url', [sequelize.literal('(SELECT COUNT(*) FROM like WHERE image.id = like.image_id)'), 'like_count']
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbImageData => res.json(dbImageData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

/* same issue as the get all */
router.get('/:id', (req, res) => {
    Image.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id', 'title', 'image_url', [sequelize.literal('(SELECT COUNT(*) FROM like WHERE image.id = like.image_id)'), 'like_count']
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbImageData => {
        if(!dbImageData) {
            res.status(404).json({ message: 'No image found with this id' });
            return;
        }
        res.json(dbImageData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

/*working*/
router.post('/', (req, res) => {
    Image.create({
        title: req.body.title,
        image_url: req.body.image_url,
        user_id: req.session.user_id
    })
    .then(dbImageData => res.json(dbImageData))
    .catch(err => {
        console.log(err);
        res.json(500).json(err);
    })
});

/* working */
router.delete('/:id', (req, res) => {
    Image.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbImageData => {
        if (!dbImageData) {
            res.status(404).json({ message: 'No image found with this id' });
            return
        }
        res.json(dbImageData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;