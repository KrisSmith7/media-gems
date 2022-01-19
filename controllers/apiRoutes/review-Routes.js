const router = require('express').Router();
const { Review } = require('../../models');

//get all comments
router.get('/', (req, res) => {
    Review.findAll()
      .then(dbReviewData => res.json(dbReviewData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//create a comment
router.post('/', (req, res) => {
    // expects => {review_text: "This is the comment", user_id: 1, post_id: 2}
    Review.create({
      review_text: req.body.review_text,
      user_id: req.body.user_id,
      post_id: req.body.post_id
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