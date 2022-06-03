import React, { useState } from 'react';
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

const RatingsReviews = ({product, reviews, metaData}) => {
  const [userFilter, setUserFilter] = useState({});
  const handleUserSelect = (filter) => {
    setUserFilter(filter);
  }
  
  return (
    <>
      <H4>Ratings & Reviews</H4>
      <RatingsReviewsContainer>

        <RatingsContainer>
          <Ratings ratings={metaData.ratings} recommended={metaData.recommended} factors={metaData.characteristics} handleUserSelect={handleUserSelect}/>
        </RatingsContainer>

        <ReviewsContainer>
          <Reviews reviews={reviews} productName={product.name} factors={metaData.characteristics} userFilter={userFilter}/>
        </ReviewsContainer>

      </RatingsReviewsContainer>
    </>
  );
};
export default RatingsReviews;