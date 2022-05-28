import React from 'react';
import styled from 'styled-components';
import ReviewCount from './ReviewCount.jsx';
import ReviewList from './ReviewList.jsx';
import ReviewButton from './ReviewButton.jsx';

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { helpful: [], newest: [], relevant: [] };
    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(sort) {
    var copyList = JSON.parse(JSON.stringify(this.props.reviews.results));
  }
  
  render() {
    var ReviewsCount = 0;
    if (this.props.totalReview) {
      for (var key of Object.keys(this.props.totalReview)) {
        ReviewsCount += Number(this.props.totalReview[key]);
      }
    }
    return (
      <>
        <ReviewContainer>
          <ReviewCount count={ReviewsCount} handleSort={this.handleSort}/>
          <ReviewList reviews={this.props.reviews.results}/>
          <ReviewButton />
        </ReviewContainer>
      </>
    );
  }
}

export default Reviews;