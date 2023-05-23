const router = require('express').Router();
const { Blog, User } = require('../models');


// /dashboard routes
router.get('/', async (req, res) => {
    try {
        if(!req.session.logged_in) {
            return res.render('login');

        } else {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],

                },
            ],
            where: {
                creator_username: req.session.user_id
            }
        });

        const userBlog = blogData.map((blog) => blog.get({ plain: true }));
       
        const date = new Date();
        const todayDate = date.toLocaleDateString();

        res.render('dashboard', {
            userBlog,
            todayDate,
            logged_in: req.session.logged_in,
            username: req.session.username,
        });
    }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;