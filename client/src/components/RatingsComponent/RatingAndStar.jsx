import React from 'react';
import styled from 'styled-components';
import StarRating from '../StarRating.jsx';

const RatingAndStarStyle = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10px;
  gap: 20px;
`;

const RatingAndStar = ({ rate, meta }) => {
  var totalReview = 0;
  var totalRating = 0;
  if (rate) {
    for (var key of Object.keys(rate)) {
      totalRating += (Number(key) * Number(rate[key]));
      totalReview += Number(rate[key]);
    }
    var Rating = (Math.round(totalRating / totalReview)).toFixed(1);
    return (
      <RatingAndStarStyle>
        <h2>{Rating}</h2>
        <div>
          <StarRating ratings={meta}/>
        </div>
      </RatingAndStarStyle>
    );
  }
};
export default RatingAndStar;