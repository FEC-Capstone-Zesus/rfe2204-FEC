import React, { useState } from 'react';
import ReviewEntryUI from './ReviewEntryUI.jsx'


const ReviewEntry = ({ review, handleHelpful, handleReport, userFilter, userIsSort }) => {
  const [helpful, setHelpful] = useState(false);
  const [report, setReport] = useState(false);

  const handleHelpfulClick = (event, review_id) => {
    if (!helpful) {
      setHelpful(true);
      handleHelpful(event, review_id, true);
    }
  };

  const handleReportClick = (event, review_id) => {
    if (!report) {
      setReport(true);
      handleReport(event, review_id, false);
    }
  };

  const date = (new Date(review.date)).toString().slice(4, 16);

  if (userIsSort) {
    return (
      <>
        {userFilter[review.rating] ? <ReviewEntryUI review={review} date={date} helpful={helpful} report={report} handleReportClick={handleReportClick} handleHelpfulClick={handleHelpfulClick}/> : null}
      </>
    );
  }
  if (!userIsSort) {
    return (
      <>
        {<ReviewEntryUI review={review} date={date} helpful={helpful} report={report} handleReportClick={handleReportClick} handleHelpfulClick={handleHelpfulClick}/>}
      </>
    );
  }
  
};
export default ReviewEntry;