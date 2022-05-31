import React from 'react';
import styled from 'styled-components';
import ReviewCount from './ReviewCount.jsx';
import ReviewList from './ReviewList.jsx';
import axios from 'axios';


const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { helpful: [], newest: [], relevant: [] };
    this.reviewList = [];
    this.initialState = true;
    this.ReviewsCount = 0;
    this.handleSort = this.handleSort.bind(this);
    this.handleHelpful = this.handleHelpful.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }

  handleSort(sort) {
    if (this.state[sort].length > 0) {
      this.reviewList = JSON.parse(JSON.stringify(this.state[sort]));
    } else {
      axios.get(`/reviews?product_id=${this.props.reviews.product}&page=1&count=50&sort=${sort}`).then((response)=> {
        this.reviewList = JSON.parse(JSON.stringify(response.data.results));
        this.initialState = false;
        this.setState({sort: JSON.parse(JSON.stringify(response.data.results))});
        this.ReviewsCount = response.data.results.length;
      });
    }
  }
  handleHelpful(event, review_id, helpful) {
    event.preventDefault();
    if(helpful) {
      axios.put(`/reviews/${review_id}/helpful`);
    }
  }

  handleReport(event, review_id, reported) {
    event.preventDefault();
    if (!reported) {
      axios.put(`/reviews/${review_id}/report`);
    }
  }
  
  render() {
    if (this.props.reviews.results) {
      if (this.initialState) {
        this.ReviewsCount = this.props.reviews.results.length;
        this.reviewList = JSON.parse(JSON.stringify(this.props.reviews.results));
      }
    }
    
    return (
      <>
        <ReviewContainer>
          <ReviewCount count={this.ReviewsCount} handleSort={this.handleSort}/>
          <ReviewList reviews={this.reviewList} handleHelpful={this.handleHelpful} handleReport={this.handleReport}/>
        </ReviewContainer>
      </>
    );
  }
}

export default Reviews;