const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const loginRoutes = require('./login-routes')

router.use('/api', apiRoutes);
router.use('/', loginRoutes);

module.exports = router;