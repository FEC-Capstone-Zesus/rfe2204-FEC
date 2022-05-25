import React from 'react';
import styled from 'styled-components';

const RatingAndStarStyle = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10px;
  gap: 20px;
`;

const RatingAndStar = (props) => (
  <RatingAndStarStyle>
    <h2>3.5</h2>
    <span>*****</span>
  </RatingAndStarStyle>
);

export default RatingAndStar;