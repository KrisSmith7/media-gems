const router = require('express').Router();

const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-Routes');
const watchlistRoutes = require('./watchlist-routes');

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/watchlist', watchlistRoutes);


module.exports = router;