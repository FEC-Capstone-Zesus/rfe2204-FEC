import React from 'react';
import styled from 'styled-components';

const RatingAndStarStyle = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10px;
  gap: 20px;
`;

const RatingAndStar = ({ rate }) => {
  var totalReview = 0;
  var totalRating = 0;
  if (rate) {
    for (var key of Object.keys(rate)) {
      totalRating += (Number(key) * Number(rate[key]));
      totalReview += Number(rate[key]);
    }
    var Rating = (totalRating / totalReview).toFixed(1);
  }
  return (
    <RatingAndStarStyle>
      <h2>{Rating}</h2>
      <span>*****</span>
    </RatingAndStarStyle>
  );
};

export default RatingAndStar;