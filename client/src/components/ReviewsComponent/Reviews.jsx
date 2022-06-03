import React, {useState} from 'react';
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

const Reviews = ({reviews, productName, factors, userFilter}) => {
  const [helpful, setHelpful] = useState('');
  const [newest, setNewest] = useState('');
  const [relevant, setRelevant] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [reviewList, setReviewList] = useState(reviews.results);
  const [reviewsCount, setReviewsCount] = useState(reviews.results.length);

  const handleSort = (sort) => {
    if ((sort === 'helpful' && helpful.length > 0) || (sort === 'newest' && newest.length > 0) || (sort === 'relevant' && relevant.length > 0)) {
      if (sort === 'helpful') { setReviewList(JSON.parse(JSON.stringify(helpful))) }
      else if (sort === 'newest') { setReviewList(JSON.parse(JSON.stringify(newest))) }
      else if (sort === 'relevant') { setReviewList(JSON.parse(JSON.stringify(relevant))) };
    } else {
      axios
      .get(`/reviews?product_id=${reviews.product}&page=1&count=50&sort=${sort}`)
      .then((response) => {
        if (sort === 'helpful') { setHelpful(JSON.parse(JSON.stringify(response.data.results))) }
        else if (sort === 'newest') { setNewest(JSON.parse(JSON.stringify(response.data.results))) }
        else if (sort === 'relevant') { setRelevant(JSON.parse(JSON.stringify(response.data.results))) };
        setReviewList(JSON.parse(JSON.stringify(response.data.results)));
        setReviewsCount(response.data.results.length);
      });
    }
  };

  const handleHelpful = (event, review_id, isHelpful) => {
    event.preventDefault();
    if (isHelpful) { axios.put(`/reviews/${review_id}/helpful`); }
  };

  const handleReport = (event, review_id, reported) => {
    event.preventDefault();
    if (!reported) { axios.put(`/reviews/${review_id}/report`); }
  };

  const handleOpenForm = (event) => {
    event.preventDefault();
    setOpenForm(true);
  };

  const handleCloseForm = (event) => {
    event.preventDefault();
    setOpenForm(false);
  };

  const handleSubmit = (ProductId, OverAllRating, Recommend, SizeRating, 
    WidthRating, ComfortRating, QualityRating, LengthRating, FitRating,
    ReviewTitle, ReviewBody, Image, NickName, Email) => {
    var ImageArray = [];
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
          .then((response) => window.alert("Thank you! Your review has Submitted!"));
      });
  };

  return (
    <>
      <ReviewContainer>
        <ReviewCount count={reviewsCount} handleSort={handleSort} />
        <ReviewList reviews={reviewList} handleHelpful={handleHelpful} handleReport={handleReport} handleOpenForm={handleOpenForm} userFilter={userFilter}/>
      </ReviewContainer>
      {openForm ? <ReviewForm productName={productName} product_id={reviews.product} factors={factors} handleCloseForm={handleCloseForm} handleSubmit={handleSubmit}></ReviewForm> : null}
    </>
  );
};
export default Reviews;