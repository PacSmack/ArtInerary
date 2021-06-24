const router = require('express').Router();
const { User, Image, Motto } = require('../../models');

/* working */ // GET /api/users
router.get('/', (req, res) => {
    // access ou user model and run findall method
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

/* working */ // GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Image,
                attributes: ['id', 'image_url', 'title']
            },
            {
                model: Motto,
                attributes: ['catchphrase']
            }
        ],
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' })
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

/* working */ // POST /api/users
router.post('/signup', (req, res) => {
    console.log(req.session)
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;

                res.json(dbUserData);
            })
        })
        .catch(err => {
            console.log(err);
        })
});

/* working */ //Login /api/users/login
router.post('/login', (req, res) => {
    //query operation
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }

        // verify user
        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            //declare session variables
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
            console.log(req.session)
        });
    });
});

/* working */
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end()
    }
});

/* working */ // PUT /api/users/1
router.put('/:id', (req, res) => {
    // if req body has exact key/value pairs to match the model, you can just use `req.body` instead
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

/* working */ // DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

/* working */
router.post('/motto', (req, res) => {
    if (req.session) {
        Motto.create({
            catchphrase: req.body.catchphrase,
            user_id: req.session.user_id
        })
            .then(dbMottoData => res.json(dbMottoData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
});

/* working */
router.put('/motto/:id', (req, res) => {
    if (req.session) {
        Motto.update(
            {
                catchphrase: req.body.catchphrase,
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        .then(dbMottoData => {
            if(!dbMottoData) {
                res.status(404).json({ message: 'No motto found with this id'});
                return;
            }
            res.json(dbMottoData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
});

/*working */
router.delete('/motto/:id', (req, res) => {
    if (req.session)
    Motto.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbMottoData => {
        if(!dbMottoData) {
            res.status(404).json({ message: 'No motto found with this id '});
            return;
        }
        res.json(dbMottoData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;