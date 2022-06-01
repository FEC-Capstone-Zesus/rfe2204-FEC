import React from 'react';
import styled from 'styled-components';
import ReviewCount from './ReviewCount.jsx';
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm.jsx';
import axios from 'axios';


const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { helpful: [], newest: [], relevant: [], openForm: false };
    this.reviewList = [];
    this.initialState = true;
    this.ReviewsCount = 0;
    this.handleSort = this.handleSort.bind(this);
    this.handleHelpful = this.handleHelpful.bind(this);
    this.handleReport = this.handleReport.bind(this);
    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
  }

  handleSort(sort) {
    if (this.state[sort].length > 0) {
      this.reviewList = JSON.parse(JSON.stringify(this.state[sort]));
    } else {
      axios.get(`/reviews?product_id=${this.props.reviews.product}&page=1&count=50&sort=${sort}`).then((response) => {
        this.reviewList = JSON.parse(JSON.stringify(response.data.results));
        this.initialState = false;
        this.setState({ sort: JSON.parse(JSON.stringify(response.data.results)) });
        this.ReviewsCount = response.data.results.length;
      });
    }
  }
  handleHelpful(event, review_id, helpful) {
    event.preventDefault();
    if (helpful) {
      axios.put(`/reviews/${review_id}/helpful`);
    }
  }

  handleReport(event, review_id, reported) {
    event.preventDefault();
    if (!reported) {
      axios.put(`/reviews/${review_id}/report`);
    }
  }
  handleOpenForm(event) {
    event.preventDefault();
    this.setState({ openForm: true });
  }

  handleCloseForm(event) {
    event.preventDefault();
    this.setState({ openForm: false });
  };

  handleSubmit(ProductId, OverAllRating, Recommend, SizeRating, WidthRating, ComfortRating, QualityRating, LengthRating, FitRating,
    ReviewTitle, ReviewBody, Image, NickName, Email) {
    var ImageArray = [];
    var created = null;
    for (var keys of Object.keys(Image)) {
      ImageArray.push(Image[keys].slice(5));
    }
    axios.get(`/reviews/meta?product_id=${ProductId}`)
      .then((response) => response.data.characteristics)
      .then((factors) => {
        for (var key of Object.keys(factors)) {
          if (key === 'Size') {
            factors[key].value = SizeRating;
          } else if (key === 'Width') {
            factors[key].value = WidthRating;
          } else if (key === 'Comfort') {
            factors[key].value = ComfortRating;
          } else if (key === 'Quality') {
            factors[key].value = QualityRating;
          } else if (key === 'Length') {
            factors[key].value = LengthRating;
          } else if (key === 'Fit') {
            factors[key].value = FitRating;
          }
        }
        return factors;
      })
      .then((factors) => {
        var newFactors = {};
        for (var key of Object.keys(factors)) {
          newFactors[factors[key]['id']] = Number(factors[key]['value']);
        }
        return newFactors;
      })
      .then((factors) => {
        var variable = {
          product_id: Number(ProductId),
          rating: Number(OverAllRating),
          summary: ReviewTitle,
          recommend: Recommend,
          name: NickName,
          email: Email,
          photos: ImageArray,
          body: ReviewBody,
          characteristics: factors
        }
        axios.post('/reviews', variable)
          .then((response) => alert("Thank you! Your review has Submitted!"));
      });
  };
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
          <ReviewCount count={this.ReviewsCount} handleSort={this.handleSort} />
          <ReviewList reviews={this.reviewList} handleHelpful={this.handleHelpful} handleReport={this.handleReport} handleOpenForm={this.handleOpenForm} />
        </ReviewContainer>
        {this.state.openForm ? <ReviewForm productName={this.props.productName} product_id={this.props.reviews.product} factors={this.props.factors} handleCloseForm={this.handleCloseForm} handleSubmit={this.handleSubmit}></ReviewForm> : null}
      </>
    );
  }
}

export default Reviews;