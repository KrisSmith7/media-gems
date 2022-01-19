const seedReviews = require('./review-seeds');
const seedMediaServices = require('./media-service-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedMediaServices();
  console.log('\n----- MEDIA SERVICES SEEDED -----\n');

  await seedReviews();
  console.log('\n----- REVIEWS SEEDED -----\n');

  process.exit(0);
};

seedAll();
