const router = require('express').Router();
const { Blog, User } = require('../models');
const apiRoutes = require('./api');
const homepageRoutes = require('./homepage')
const dashboardRoutes = require('./dashboard')


// /api
router.use('/api', apiRoutes);
//sets homepage routes to run from the homepage.js file
router.use('/homepage', homepageRoutes)

router.use('/dashboard', dashboardRoutes)


router.get('/login', async (req, res) => {
    try {
        res.render('login', {
            logged_in: req.session.logged_in,
            username: req.session.username,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    try {
        res.render('signup', {
            logged_in: req.session.logged_in,
            username: req.session.username,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
