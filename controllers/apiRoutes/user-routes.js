const router = require('express').Router();
const { User, Review, Visited } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');
const moment = require('moment');

// get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    }
  })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(userData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/signup', (req, res) => {
  // expects {first_name: 'Alex' last_name: 'Monde' user_name: 'A Monde', email: 'nwestnedge0@cbc.ca', password: 'password1234'}
  console.log("in router post req: " + req.body);
  User.create({
    first_name:req.body.firstName,
    last_name:req.body.lastName,
    user_name: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.user_name;
      req.session.loggedIn = true;
      let formattedDate = moment.parseZone(dbUserData.last_visit).local().format('MM/DD/YYYY');
      req.session.last_visit = formattedDate;

      res.json(dbUserData);
    });
  })
  // .then((tag) => {
  //   res.status(200).json(tag);
  // })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});


router.post('/login', (req, res) => {
  // expects {email: 'nwestnedge0@cbc.ca', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(userData => {
    // console.log(userData)
    if (!userData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }
    
    const validPassword =  userData.checkPassword(req.body.password);
    
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
  
    
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.user_name;
      req.session.loggedIn = true;
      let formattedDate = moment.parseZone(userData.last_visit).local().format('MM/DD/YYYY');
      req.session.last_visit = formattedDate;

    res.json({ user: userData, message: 'You are now logged in!' });
  });
});
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    // Add last_visited date to User table
    User.update( {last_visit : sequelize.literal('CURRENT_TIMESTAMP') }, { where: {id: req.session.user_id } });

    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});


router.put('/:id', (req, res) => {

  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(userData => {
      if (!userData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(userData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.session.user_id
    }
  })
    .then(userData => {
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(userData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;