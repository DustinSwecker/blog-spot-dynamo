const router = require('express').Router();
const { User, Blog } = require('../../models');


//largely just pilfered from class content
//new user /api/user
router.post('/', async (req, res) => {
    try {
        const saveUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        console.log(saveUser);
        req.session.save(() => {
            req.session.logged_in = true;
            req.session.username = saveUser.username;
            req.session.user_id = saveUser.id;
            
        });
        res.render('dashboard', {
          saveUser,
          logged_in: req.session.logged_in,
          username: req.session.username,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//login /api/user/login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);


    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.username = userData.username;
      req.session.logged_in = true;
      req.session.user_id = userData.id

      })

      const userBlogs = await Blog.findAll({
        include: [
          {
          model: User,
          attributes: ['username'],
        },
      ],
        
        where: {
          creator_username: userData.id,
    
        }
      });
      
      res.render('dashboard', {
        userBlogs,
        userData,
        logged_in: req.session.logged_in,
        username: req.session.username,
      })

  } catch (err) {
    res.status(400).json(err);
  }
});


//logout /api/user/logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      
      res.status(204).end();
    });
  } else {
    return res.status(404).end();
  }
});

module.exports = router;
