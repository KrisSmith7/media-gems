const router = require('express').Router();

    
const Watchlist = require('../../models/Watchlist');
const Review = require('../../models/Review');
const User = require('../../models/User');
const Service = require('../../models/Service');
const withAuth = require('../../utils/auth');



router.get('/', (req, res) => {
    Watchlist.findAll({
      where: {user_id: req.session.user_id},
// include: [
//         {
//           model: Review,
//           attributes: ['title']
//     },
//     //     {
//     //       model: Service,
//     //       attributes: ['service_name']
//     // },
//         {
//           model: User,
//           attributes: ['user_name']
//     }
//   ]

})
.then(dbReviewData => res.json(dbReviewData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });



router.post('/', (req,res) =>{
Watchlist.create(
    {
      id: req.body.id,
       title: req.body.title,
       service: req.body.service,
       user_id: req.session.user_id,
    })
.then(dbReviewData => res.json(dbReviewData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

router.delete('/:id', (req, res) => {
    Watchlist.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbReviewData => {
        if (!dbReviewData) {
          res.status(404).json({ message: 'No title found with this id!' });
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
