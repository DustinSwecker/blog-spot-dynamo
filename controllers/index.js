const router = require('express').Router();
const apiRoutes = require('./api');


// /api
router.use('/api', apiRoutes);
//testing routes
router.get('/', async (req,res) => {
    console.log('hi');
});

module.exports = router;
