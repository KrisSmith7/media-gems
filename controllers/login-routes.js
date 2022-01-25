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
      attributes: ['user_name', 'last_visit']
    },
  ]
})
      .then(dbReviewData => {
        const homepageReviews = dbReviewData.map(review => review.get({ plain: true }));
        res.render('homepage',{
          homepageReviews,
          username:req.session.username,
          last_visit:req.session.last_visit,
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


  router.get('/reviews/:id', (req, res) => {
    Review.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'review_text',
        'title'
      ],
      include: [
        {
          model: Service,
          attributes: ['id', 'service_name'],
        },
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No review found with this id' });
          return;
        }
  
        const editReview = dbPostData.get({ plain: true });
  
        res.render('edit-review', 
          editReview,
          // loggedIn: req.session.loggedIn
        );
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.put('/reviews/:id', withAuth,  (req, res) => {
     Review.update({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'review_text'
      ],
      include: [
        {
          model: Service,
          attributes: ['id']
    },
  ]
})
      .then(dbReviewData => {
        const editingReview = dbReviewData.get({ plain: true });
        console.log(dbReviewData);
        res.render('edit-review',editingReview);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
 




  router.get('user/', (req, res) => {
    User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.session.user_id
      }
    })
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        console.log(userData)
        const singleUser = userData.get({ plain: true });
        res.render('profile', 
        singleUser)
        // loggedIn: req.session.loggedIn);
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