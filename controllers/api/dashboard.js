const router = require('express').Router();
const { User, Blog } = require('../../models');


// api/dashboard/newblog new blogpost
router.post('/newblog', async (req, res) => {
    try {
        
        const newBlog = await Blog.create({
            post_title: req.body.blogTitle,
            content: req.body.blogContent,
            creator_username: req.session.user_id,
    });

        const userBlog = newBlog.get({ plain: true });

        res.render(`blogpost`, {
          userBlog,
          logged_in: req.session.logged_in,
          username: req.session.username,
          user_id: req.session.user_id,

        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;