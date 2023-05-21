const router = require('express').Router();
const { Blog, User } = require('../models');
const apiRoutes = require('./api');
const homepageRoutes = require('./homepage')


// /api
router.use('/api', apiRoutes);
//sets homepage routes to run from the homepage.js file
router.use('/homepage', homepageRoutes)


router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        res.render('dashboard');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
