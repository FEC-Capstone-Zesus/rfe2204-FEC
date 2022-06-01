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


class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <>
        <H4>Ratings and Reviews</H4>
        <RatingsReviewsContainer>

          <RatingsContainer>
            <Ratings ratings={this.props.metaData.ratings} recommended={this.props.metaData.recommended} factors={this.props.metaData.characteristics}/>
          </RatingsContainer>

          <ReviewsContainer>
            <Reviews reviews={this.props.reviews} productName={this.props.product.name} factors={this.props.metaData.characteristics}/>
          </ReviewsContainer>

        </RatingsReviewsContainer>
      </>
    );
  }
}

export default RatingsReviews;