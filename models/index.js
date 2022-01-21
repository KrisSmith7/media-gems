// import all models
const Reviews = require('./Review');
const User = require('./User');
const Services = require('./Service');
const Visited = require('./Visited');
const ReviewService = require('./ReviewService');

// create associations

// Users have many Reviews
User.hasMany(Reviews, {
    foreignKey: 'user_id',
})

// A review belongs to a single user
Reviews.belongsTo(User, {
    foreignKey: 'user_id',
})

// // Services belong to many Reviews
// Services.belongsToMany(Reviews, {
//     through: ReviewService,
// })

// // Reviews belong to a single Service
// Reviews.belongsTo(Services, {
//     through: ReviewService,
// })

// A last visited date belongs to a single user
Visited.belongsTo(User, {
    foreignKey: 'last_visited'
})

// Users can have many last visited dates
User.hasOne(Visited, {
    foreignKey: 'last_visited'
})

// export models
module.exports = {
    Reviews,
    User,
    Services,
    Visited,
    // ReviewService
};
  