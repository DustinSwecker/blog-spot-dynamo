const router = require('express').Router();
const { User } = require('../../models');


//largely just pilfered from class content
//new user /api/user
router.post('/', async (req, res) => {
    try {
        const saveUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.logged_in = true;
            res.status(201).json(saveUser);
        });
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
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


//logout /api/user/logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      
      return res.render('homepage');
    });
  } else {
    return res.status(404).end();
  }
});

module.exports = router;
