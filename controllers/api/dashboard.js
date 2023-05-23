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

        res.render(`blogpost/:${newBlog.id}`, {
          
          logged_in: req.session.logged_in,
          username: req.session.username,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;