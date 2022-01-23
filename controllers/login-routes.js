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
  router.get('/user', (req, res) => {
    res.render('user');
  });
  router.get('/logout', (req, res) => {
    res.render('logout');
  });


module.exports = router;