import React from 'react';
import Ratings from './RatingsComponent/Ratings.jsx';
import Reviews from './ReviewsComponent/Reviews.jsx';
import styled from 'styled-components';

const RatingsReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 10px;
`;

const RatingsContainer = styled.div`
  flex-basis: 25%;
`;
const ReviewsContainer = styled.div`
  flex-basis: 65%;
`;
const H4 = styled.h4`
  padding-left: 4%;
`;

const RatingsReviews = ({product, reviews, metaData, filter, setNewFilter, userIsSort, setUserIsSort}) => {
  return (
    <>
      <H4>Ratings & Reviews</H4>
      <RatingsReviewsContainer>

        <RatingsContainer>
          <Ratings ratings={metaData.ratings} recommended={metaData.recommended} factors={metaData.characteristics} filter={filter} setNewFilter={setNewFilter} setUserIsSort={setUserIsSort} userIsSort={userIsSort}/>
        </RatingsContainer>

        <ReviewsContainer>
          <Reviews reviews={reviews} productName={product.name} factors={metaData.characteristics} userFilter={filter} userIsSort={userIsSort}/>
        </ReviewsContainer>

      </RatingsReviewsContainer>
    </>
  );
};
export default RatingsReviews;