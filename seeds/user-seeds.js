// const sequelize = require('../config/connection');
const User = require('../models/User');

const userdata = [
  {
    first_name: 'Alex',
    last_name: 'Monde',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    first_name: 'James',
    last_name: 'Willoughway',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    first_name: 'Ilana',
    last_name: 'Boddam',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    first_name: 'Daniel',
    last_name: 'Stanmer',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    first_name: 'Nate',
    last_name: 'Hannon',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;