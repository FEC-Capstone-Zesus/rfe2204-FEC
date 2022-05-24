import React from 'react';
import styled from 'styled-components';

const RatingAndStarStyle = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20px;
  gap: 20px;
`;

const RatingAndStar = (props) => (
  <RatingAndStarStyle>
    <h1>3.5</h1>
    <span>*****</span>
  </RatingAndStarStyle>
);

export default RatingAndStar;