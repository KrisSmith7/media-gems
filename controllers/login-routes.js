const router = require('express').Router();
const Review = require('../models/Review');
const User = require('../models/User');
const Service = require('../models/Service')

router.get('/', (req, res) => {
    res.render('login');
  });
router.get('/login', (req, res) => {
    res.render('login');
  });

router.get('/homepage', (req, res) => {
  console.log("doing findall");
  Review.findAll({
    attributes: [
      'id',
      'title',
      'review_text'
    ],
    include: [
      {
        model: User,
        attributes: ['user_name']
      },
      {
        model: Service,
        attributes: ['service_name']
      }
    ]
  })
    .then(reviewData => {
      console.log("got review data");
      const reviews = reviewData.map(review => review.get({ plain: true }));
      console.log(reviews);
      res.render('homepage', { reviews });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    //res.render('homepage');
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