const router = require('express').Router();
const loginRoutes = require('./login_out');
const dashboardRoutes = require('./dashboard')

// /api/user
router.use('/user', loginRoutes);

// /api/dashboard

router.use('/dashboard', dashboardRoutes);

module.exports = router;