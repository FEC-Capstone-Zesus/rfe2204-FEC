const getReviews = (reviews) => (
  {
    type : 'GET_REVIEWS',
    reviews : reviews
  }
);

export default getReviews;