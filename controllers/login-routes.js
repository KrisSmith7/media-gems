const router = require('express').Router();
const Review = require('../models/Review');
const Service = require('../models/Service');
const User = require('../models/User');
const Visited = require('../models/Visited');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  // console.log(req.session);
  if (req.session.loggedIn) {
    res.redirect('homepage');
    return;
  }
    res.render('login');
  });

  router.get('/homepage', withAuth, (req, res) => {
    // console.log(req.session);
    console.log('======================');
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
    },
    {
      model: User,
      attributes: ['user_name']
    },
  ]
})
      .then(dbReviewData => {
        const homepageReviews = dbReviewData.map(review => review.get({ plain: true }));
        res.render('homepage',{
          homepageReviews,
          loggedIn:req.session.loggedIn});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

  router.get('/reviews', withAuth,  (req, res) => {
     Review.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'review_text'
      ],
      include: [
        {
          model: Service,
          attributes: ['service_name']
    },
        {
          model: User,
          attributes: ['user_name']
    },
  ]
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
 




  router.get('/profile', withAuth, (req, res) => {
    User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.session.id
      }
    })
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        console.log(userData)
        const singleUser = userData.get({ plain: true });
        res.render('single-user', {
          singleUser,
        loggedIn:req.session.loggedIn});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  
  router.get('/users/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
  });


module.exports = router;