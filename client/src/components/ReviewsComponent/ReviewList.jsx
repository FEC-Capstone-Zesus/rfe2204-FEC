import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

const ReviewList = ({reviews}) => {
  if (reviews) {
    const listLength = reviews.length;
    var display = 2;
    var count = 0;
    return (
      <>
        {reviews.map((review, index) => <ReviewEntry review={review} key={index}/>)}
      </> 
    );
  }
};

export default ReviewList;