// const sequelize = require('../config/connection');
const User = require('../models/User');

const userdata = [
  {
    first_name: 'Alex',
    last_name: 'Monde',
    user_name: 'A Monde',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    first_name: 'James',
    last_name: 'Willoughway',
    user_name: 'Jim',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    first_name: 'Ilana',
    last_name: 'Boddam',
    user_name: 'moviebuff',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    first_name: 'Daniel',
    last_name: 'Stanmer',
    username: 'DannyBoy',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    first_name: 'Nate',
    last_name: 'Hannon',
    username: 'hannon',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;