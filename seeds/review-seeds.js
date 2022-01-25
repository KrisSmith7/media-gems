const Review  = require('../models/Review');

const reviewData = [
    {
    title: 'Ted Lasso',
      review_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      user_id: 1,
      service_id: 1
    },

    {
      title: 'The Office',
      review_text: ' My comfort show. We watch it every night and fully quote every episode. Gotta watch!',
      user_id: 2,
      service_id: 2
    },
    {
      title: 'The Morning Show',
      review_text: 'Livinggg for the drama. Bradley and Laura are so cute!',
      user_id: 3,
      service_id: 1
    },
    {
      title: 'The Resident',
      review_text: 'In love with all the staff. Each episode gets me!',
      user_id: 4,
      service_id: 3
    },
    {
      title: 'Ozark',
      review_text: 'NOT READY FOR IT TO END. THIS SHOW IS NUTSSSS!',
      user_id: 1,
      service_id: 3
    },
]

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;