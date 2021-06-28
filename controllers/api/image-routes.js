const router = require('express').Router();
const { User, Image, Reference } = require('../../models');
const sequelize = require('../../config/connection');
const cloudinary = require('cloudinary').v2;
const withAuth = require('../../utils/auth');

require("dotenv").config();
require("../../config/cloudinary");

/*working and associated properly with reference model*/
router.get('/', (req, res) => {
    console.log('=====================');
    Image.findAll({
        attributes: [
            'id', 
            'title', 
            'image_url', 
            //[sequelize.literal('(SELECT COUNT(*) FROM like WHERE image.id = like.image_id)'), 'like_count']
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Reference,
                attributes: ['title']
            }
        ]
    })
        .then(dbImageData => res.json(dbImageData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

/* working */
router.get('/:id', (req, res) => {
    Image.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'image_url',
            //[sequelize.literal('(SELECT COUNT(*) FROM like WHERE image.id = image_id)'), 'like_count']
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Reference,
                attributes: ['title']
            }
        ]
    })
        .then(dbImageData => {
            if (!dbImageData) {
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

/*working gotta fix uploader and send it to front end to get body*/
// router.post('/upload', async (req, res) => {
//     try {
//         const fileStr = req.body.data;
//         const uploadedResponse = await cloudinary.uploader.
//         upload(fileStr, {
//             upload_preset: 'ml_default'
//         })
//         console.log(uploadedResponse);
//         res.json({message: "success"})
//     } catch (error) {
//         console.log(error)
//     }
// })

router.post('/upload/:id', withAuth, (req, res) => {    
    const file = req.files.image
    console.log(file)
    cloudinary.uploader.upload(file.tempFilePath, (error, result) => {
        console.log(result, error)
        if (result) {
            Image.create({                
                image_url: result.url,
                user_id: req.session.user_id,
                reference_id: req.params.id
            })
                .then(image => {
                    console.log('file uploaded');
                    console.dir(image)
                    res.redirect(`/image/${req.params.id}`)
                })
                .catch(err => {
                    console.log(err);
                    res.json(500).json(err);
                })
            return
        }
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