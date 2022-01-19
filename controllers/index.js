const router = require('express').Router();

const reviewRoutes = require('./apiRoutes/review-Routes');
// const mediaServiceRoutes = require('./apiRoutes/media-service');

router.use('/reviews', reviewRoutes);
// router.use('/service', mediaServiceRoutes);


module.exports = router;