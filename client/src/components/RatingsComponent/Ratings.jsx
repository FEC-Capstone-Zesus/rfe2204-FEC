import React from 'react';
import RatingAndStar from './RatingAndStar.jsx';
import Factors from './Factors.jsx';
import Votes from './Votes.jsx';
import styled from 'styled-components';

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Ratings = ({ ratings, recommended, factors }) => {
  return (
    <RatingContainer>
      <RatingAndStar rate={ ratings }/>
      <Votes recommended={ recommended} rateNumber={ ratings }/>
      <Factors factors={ factors }/>
    </RatingContainer>
  );
};

export default Ratings;

