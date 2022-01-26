// import all models
const Reviews = require('./Review');
const User = require('./User');
const Services = require('./Service');
const Watchlist = require('./Watchlist');
const ReviewService = require('./ReviewService');

// create associations
Reviews.belongsTo(User, {
    foreignKey: 'user_id'
});

Reviews.belongsTo(Services, {
    foreignKey: 'service_id'
});

User.hasMany(Reviews, {
    foreignKey: 'user_id'
});

Services.hasMany(Reviews, {
    foreignKey: 'service_id'
});






//trial associations for watchlist

Watchlist.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasOne(Watchlist, {
    foreignKey: 'user-id'
})

// Reviews.hasMany(Watchlist, {
//     foreignKey:'title'
// });

// Watchlist.hasMany(Reviews, {
//     foreignKey: 'service_id'
// });


// Watchlist.belongsTo(User, {
//     foreignKey: 'user_id'
// });


// Reviews.belongsToMany(Watchlist, {through: ReviewService});
// Services.belongsToMany(Watchlist, {through: ReviewService});

// Services.hasMany(Watchlist, {
//     foreignKey: 'service'
// });


// export models
module.exports = {
    Reviews,
    User,
    Services,
    Watchlist
};
  