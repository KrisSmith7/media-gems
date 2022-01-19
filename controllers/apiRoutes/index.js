const router = require('express').Router();

// const userRoutes = require('./user-routes.');
const reviewRoutes = require('./review-Routes');


router.use('/reviews', reviewRoutes);


module.exports = router;
