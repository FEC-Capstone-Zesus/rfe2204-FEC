import React from 'react';
import RatingAndStar from './RatingAndStar.jsx';
import Factors from './Factors.jsx';
import Votes from './Votes.jsx';
import styled from 'styled-components';

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Ratings = (props) => (
  <RatingContainer>
    <RatingAndStar />
    <Votes />
    <Factors />
  </RatingContainer>
);

export default Ratings;

