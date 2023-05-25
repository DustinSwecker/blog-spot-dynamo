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

        const blogData = await Blog.findOne({
            include: [
                {
                    model: User,
                    attribute: ['username'],
                },
            ],
            where: {
                id: newBlog.id,
            }
        });

        const userBlog = blogData.get({ plain: true });
        const blogId = userBlog.id;
       res.status(200).json(userBlog);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//api/dashboard
router.put('/', async (req, res) => {
    try {
        if (!req.body) {
            return;
        } else {
        const blogUpdate = await Blog.update({
            post_title: req.body.updateBlogTitle,
            content: req.body.updateBlogContent
        }, 
        {
            where: {
                id: req.body.blogId,
                }
            })
            res.json(blogUpdate);
        }
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// api/dashboard/:id to delete
router.delete('/:id', async (req, res) => {
    try {
      const blogData = await Blog.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!blogData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;