const router = require('express').Router();
const loginRoutes = require('./login_out');

// /api/user
router.use('/user', loginRoutes);

router.get('/', async (req,res) => {
    console.log('hi');
});

module.exports = router;