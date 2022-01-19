// import all models
const Reviews = require('./Review');
const User = require('./User');
const Services = require('./Service');
const Visited = require('./Visited');
const UserService = require('./UserService');

// create associations

// Users have many Reviews
User.hasMany(Reviews, {
    foreignKey: 'user_id',
})

// A review belongs to a single user
Reviews.belongsTo(User, {
    foreignKey: 'user_id',
})

// Services belong to many Users
Services.belongsToMany(User, {
    through: UserService,
})

// Users belong to many Services
User.belongsToMany(Services, {
    through: UserService,
})

// A last visited date belongs to a single user
Visited.belongsTo(User, {
    foreignKey: 'last_visited'
})

// Users can have many last visited dates
User.hasMany(Visited, {
    foreignKey: 'last_visited'
})

// export models
module.exports = {
    Reviews,
    User,
    Services,
    Visited,
    UserService
};
  