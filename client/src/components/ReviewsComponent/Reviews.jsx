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

const Reviews = (props) => (
  <ReviewContainer>
    <ReviewCount />
    <ReviewList />
    <ReviewButton />
  </ReviewContainer>
);

export default Reviews;