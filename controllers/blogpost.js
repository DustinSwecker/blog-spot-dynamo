const router = require('express').Router();
const { Blog, User, Comment } = require('../models');


// /blogpost:id routes
router.get('/:id', async (req, res) => {
    try {
        
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],

                },
            ],
        });

        

        const userBlog = blogData.get({ plain: true });

        console.log(userBlog);

        const commentData = await Comment.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'username']
                }
            ],
            where: {
                blog_id: req.params.id
            }
        })
        const parseCommentData = commentData.map((comment) => comment.get({ plain: true }));
       
        const date = new Date();
        const todayDate = date.toLocaleDateString();

        res.render(`blogpost`, {
            parseCommentData,
            userBlog,
            todayDate,
            logged_in: req.session.logged_in,
            username: req.session.username,
            user_id: req.session.user_id
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;