import React, { useState } from 'react';
import styled from 'styled-components';
import StarRating from '../StarRating.jsx';

const ReviewEntryContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-template-areas:
    "star nameAndtime"
    "reviewTitle reviewTitle"
    "reviewContent reviewContent"
    "button ."
    "endLine endLine";
`;

const Star = styled.div`
  gird-area: star;
`;

const NameAndtime = styled.div`
  grid-area: nameAndtime;
  text-align: right;
  font-size: 0.75em;
`;

const ReviewTitle = styled.div`
  grid-area: reviewTitle;
  font-weight: bold;
`;

const ReviewContent = styled.div`
  grid-area: reviewContent;
  margin-top: 10px;
  font-size: 0.75em;
`;

const ReviewButtonContainer = styled.div`
  grid-area: button;
  max-width: 100%;
  font-size: 0.65em;
  margin-top: 10px;
  color: #808080;
  flex-wrap: wrap;
  .button{
    border: none;
    text-decoration: underline;
  }
`;
const ReviewButton = styled.button`
  border: none;
  font-size: 1em;
  color: #808080;
  background-color: white;
  text-decoration: underline;
`;

const EndLine = styled.hr`
  grid-area: endLine;
  width: 100%;
  border: 1px solid #d3d3d3;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Img = styled.img`
  width: 70px;
  height: auto;
`;

const ImgModal = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.9);
`;

<<<<<<< HEAD
const Photo = ({photos}) => {
=======
const Photo = ({ photos }) => {
>>>>>>> a0a7ffdf46bedba2f17c1c4cbc44c5f185f0463b
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {photos.map((photo, index) => <Img src={photo.url} alt="Review Photo" key={index} onClick={(e) => handleClick(e)} />)}
    </>
  );
};

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RecommendContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: green;
`;

const ResponseContainer = styled.div`
  margin-top: 10px;
  background-color: #d3d3d3;
`;

const ReviewEntry = ({ review, handleHelpful, handleReport}) => {
  const [helpful, setHelpful] = useState(false);
  const [report, setReport] = useState(false);
  //const [showReviewTile, setShowReviewTile] = useState(userFilter);

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

  if (review) {
    var date = (new Date(review.date)).toString().slice(4, 16);
    return (
      <>
        <ReviewEntryContainer>
          <Star><StarRating ratings={review.rating} /></Star>
          <NameAndtime>{review.reviewer_name}, {date}</NameAndtime>
          <ReviewTitle>{review.summary}</ReviewTitle>
          <ReviewContent>
            <ContentContainer>
              {review.body}
            </ContentContainer>
            {review.recommend ? <RecommendContainer>&#x2713; I recommend this product</RecommendContainer> : null}
            {review.photos ?
              <PhotoContainer>
                <Photo photos={review.photos}></Photo>
              </PhotoContainer>
              : null}
            {review.response ?
              <ResponseContainer>
                Response:
                &nbsp;
                {review.response}
              </ResponseContainer>
              : null}
          </ReviewContent>
          <ReviewButtonContainer>
            Helpful?
            <ReviewButton onClick={(event) => handleHelpfulClick(event, review.review_id)}>Yes</ReviewButton>
            ({helpful ? review.helpfulness + 1 : review.helpfulness})
            |
            {report ? <ReviewButton>REPORTED</ReviewButton> : <ReviewButton onClick={(event) => handleReportClick(event, review.review_id)}>Report</ReviewButton>}
          </ReviewButtonContainer>
          <EndLine />
        </ReviewEntryContainer>
      </>
    );
  }
};
export default ReviewEntry;