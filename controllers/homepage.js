const router = require('express').Router();
const { Blog, User } = require('../models')


//route to fill in blog data on the homepage
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],

                },
            ],
        });
        const blog = blogData.map((blog) => blog.get({ plain: true }));
       
        const date = new Date();
        const todayDate = date.toLocaleDateString();

        res.render('homepage', {
            blog,
            todayDate,
            logged_in: req.session.logged_in,
            username: req.session.username
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;