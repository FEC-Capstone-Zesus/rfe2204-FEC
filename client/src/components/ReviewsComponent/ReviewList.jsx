import React, { useState } from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import ReviewButton from './ReviewButton.jsx';

const ReviewList = ({reviews, handleHelpful, handleReport, handleOpenForm}) => {
  // var listLength;
  // var index = 0;
  // var newItems = [];
  if (reviews) {
    // listLength = reviews.length;

    // const load = (e) => {
    //   e.preventDefault();
    //   var newItems = JSON.parse(JSON.stringify(display));
      
    //   for (var i = index; i < index + 2; i++) {
    //     newItems.push(reviews[i]);
    //   }
    //   index += 2;
    //   setDisplay(newItems);
    // };

    // if (listLength > 2) {
    //   newItems.push(reviews[0], reviews[1]);
    //   index += 2;
    // } else {
    //   newItems = JSON.parse(JSON.stringify(reviews));
    // }
    // const [display, setDisplay] = useState(newItems);
  
    return (
      <>
        {reviews.map((review, index) => <ReviewEntry review={review} key={index} handleHelpful={handleHelpful} handleReport={handleReport}/>)}
        <ReviewButton handleOpenForm={handleOpenForm}/>
      </> 
    );
  }
};

export default ReviewList;