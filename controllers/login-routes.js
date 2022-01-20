const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login');
  });
router.get('/login', (req, res) => {
    res.render('login');
  });

  router.get('/homepage', (req, res) => {
    res.render('homepage');
  });
  router.get('/reviews', (req, res) => {
    res.render('reviews');
  });

  
module.exports = router;