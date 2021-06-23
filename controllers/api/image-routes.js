const router = require('express').Router();
const { User, Image } = require('../../models');
const sequelize = require('../../config/connection');
const cloudinary = require('cloudinary').v2;
const fileupload = require('express-fileupload'); 



require("dotenv").config();
require("../../config/cloudinary");



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
            'id', 'title', 'image_url', [sequelize.literal('(SELECT COUNT(*) FROM like WHERE image.id = image_id)'), 'like_count']
        ],
        include: [
            {
                model: User,
                attributes: ['username']
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

/*working*/
router.post('/upload', (req, res) => {  
    // try {
    //     const fileStr = req.body.data;
    //     const uploadResponse = cloudinary.uploader.upload(fileStr, {
    //         upload_preset: 'ml_default'
    //     });
    //     console.log(uploadResponse)
    //     res.json({ msg: 'it worked'});

    // } catch(err) {
    //     console.log(err);
    //     res.status(500).json({err: 'Something went wrong'})
    // }    
    cloudinary.uploader.upload(req.body.data, (error, result) => {
        console.log('teste log')
        console.log(result, error)
        if (result) {  
            console.log('teste log2')          
            Image.create({
                title: req.body.title,
                image_url: result.url,
                user_id: req.session.user_id                
            })
                .then(image => {
                    console.log('file uploaded');                       
                })
                .catch(err => {
                    console.log(err);
                    res.json(500).json(err);
                })
                return
        }
    })
    return res.json(500);
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