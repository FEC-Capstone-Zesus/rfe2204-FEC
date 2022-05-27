import React from 'react';
import styled from 'styled-components';
import ReviewCount from './ReviewCount.jsx';
import ReviewList from './ReviewList.jsx';
import ReviewButton from './ReviewButton.jsx';

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
`;

const Reviews = ({ reviews, totalReview }) => {
  var ReviewsCount = 0;
  if (totalReview) {
    for (var key of Object.keys(totalReview)) {
      ReviewsCount += Number(totalReview[key]);
    }
  }
  return (
    <ReviewContainer>
      <ReviewCount count={ReviewsCount}/>
      <ReviewList />
      <ReviewButton />
    </ReviewContainer>
  );
};

export default Reviews;