import React, { useState } from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import ReviewButton from './ReviewButton.jsx';

const ReviewList = ({reviews, handleHelpful, handleReport, handleOpenForm, userFilter}) => {
  const [showButton, setShowButton] = useState(true);
  var listItem = [];

  const load = (e) => {
    e.preventDefault();
    listItem = reviews;
    setShowButton(false);
  }

  if (reviews) {
    if (reviews.length > 2 && showButton === true) {
      listItem = [reviews[0], reviews[1]];
    } else {
      listItem = reviews;
    }
  } 
  
  if (listItem.length) {
    return (
      <>
        {listItem.map((review, index) => <ReviewEntry review={review} key={index} handleHelpful={handleHelpful} handleReport={handleReport} userFilter={userFilter}/> )}
        <ReviewButton showMoreReviewButton={showButton} handleOpenForm={handleOpenForm} load={load}/>
      </> 
    );
  }
};
export default ReviewList;