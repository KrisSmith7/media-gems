const router = require('express').Router();
const Review = require('../models/Review');
const Service = require('../models/Service');

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
     Review.findAll({
      // where: {
      //   user_id: req.params.user_id
      // },
      attributes: [
        'id',
        'title',
        'review_text'
      ],
      include: [
        {
          model: Service,
          attributes: ['service_name']
    }]
})
      .then(dbReviewData => {
        const reviews = dbReviewData.map(review => review.get({ plain: true }));
        console.log(dbReviewData);
        res.render('reviews',{reviews});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  //   res.render('reviews');
  // });




  router.get('/user', (req, res) => {
    res.render('user');
  });
  router.get('/logout', (req, res) => {
    res.render('logout');
  });


module.exports = router;