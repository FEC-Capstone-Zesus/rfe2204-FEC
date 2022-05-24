import React from 'react';
import Ratings from './RatingsComponent/Ratings.jsx';
import Reviews from './ReviewsComponent/Reviews.jsx';
import styled from "styled-components";

const RatingsReviewsStyle = styled.div` 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  margin: 10px;
`;


class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <>
        <h4>Ratings & Reviews</h4>
        <RatingsReviewsStyle>
          <Ratings /> 
          <Reviews />
        </RatingsReviewsStyle>
      </>
    );
  }
}

export default RatingsReviews;