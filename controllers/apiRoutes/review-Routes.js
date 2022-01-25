const router = require('express').Router();
//should export all three with the index.js in model folder
    // const {Review, User, Service}   = require('../../models');
    
const Review = require('../../models/Review');
const User = require('../../models/User');
const Service = require('../../models/Service');
const withAuth = require('../../utils/auth');

//get all comments
router.get('/', (req, res) => {
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
      .then(dbReviewData => res.json(dbReviewData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


router.get('/:id', (req, res) => {
    Review.findOne({
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
          attributes: ['service_name']
    }]
})
      .then(dbReviewData => {
        const reviews = dbReviewData.map(review => review.get({ plain: true }));
        console.log(dbReviewData)
        res.render('reviews', 
        {reviews});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.put('/:id', withAuth, (req, res) => {
    Review.update(
      {
        title: req.body.title,
        review_text: req.body.review_text,
        service_id: req.body.service_id
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No review found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

//create a comment
router.post('/', (req, res) => {
    // expects => {review_text: "This is the comment", user_id: 1, post_id: 2}
    Review.create({
      title: req.body.title,
      review_text: req.body.review_text,
      user_id: req.session.user_id,
      service_id: req.body.service_id // can we change this to make a selection of the values instead of id
    })
      .then(dbReviewData => res.json(dbReviewData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

//delete a comment
router.delete('/:id', (req, res) => {
    Review.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbReviewData => {
        if (!dbReviewData) {
          res.status(404).json({ message: 'No review found with this id!' });
          return;
        }
        res.json(dbReviewData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;