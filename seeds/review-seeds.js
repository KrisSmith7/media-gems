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
    review_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 2,
      service_id: 2
    },
    {
    title: 'The Morning Show',
    review_text: 'In hac habitasse platea dictumst.',
    user_id: 3,
      service_id: 1
    },
    {
    title: 'The Resident',
    review_text: 'Nunc rhoncus dui vel sem.',
    user_id: 4,
    service_id: 3
    },
]

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;