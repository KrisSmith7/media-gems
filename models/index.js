// import all models
const Reviews = require('./Review');
const User = require('./User');
const Services = require('./Service');

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
  

// export models
module.exports = {
    Reviews,
    User,
    Services,
};
  