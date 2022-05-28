import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

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
const Photo = ({photos}) => (
  <>
    {photos.map((photo, index) => <Img src={photo.url} alt="Review Photo" key={index}/>)}
  </>
);

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

const ReviewEntry = ({review}) => {
  if (review) {
    var date = (new Date(review.date)).toString().slice(4, 16);
  return (
    <ReviewEntryContainer>
      <Star>{review.rating}</Star>
      <NameAndtime>{review.reviewer_name}, {date}</NameAndtime>
      <ReviewTitle>{review.summary}</ReviewTitle>
      <ReviewContent>
        <ContentContainer>
          {review.body}
        </ContentContainer>

        {review.recommend ? <RecommendContainer><FontAwesomeIcon icon={faCheck} /> I recommend this product</RecommendContainer> : null}

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
        <ReviewButton>Yes</ReviewButton>
        ({review.helpfulness})
        |
        <ReviewButton>Report</ReviewButton>
      </ReviewButtonContainer>
      <EndLine/>
    </ReviewEntryContainer>);
  }
};

export default ReviewEntry;