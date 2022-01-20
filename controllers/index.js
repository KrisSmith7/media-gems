const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const homeRoutes = require('./login-routes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;