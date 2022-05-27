import React from 'react';
import styled from 'styled-components';

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
  flex-wrap: wrap;
  .button{
    border: none;
    text-decoration: underline;
  }
`;
const ReviewButton = styled.button`
  border: none;
  font-size: 1em;
  background-color: white;
  text-decoration: underline;
`;

const EndLine = styled.hr`
  grid-area: endLine;
  width: 100%;
  border: 1px solid black;
`; 

const ReviewEntry = () => (
  <ReviewEntryContainer>
    <Star>*****</Star>
    <NameAndtime>username, MM-DD-YY</NameAndtime>
    <ReviewTitle>This is Review Title</ReviewTitle>
    <ReviewContent>Review Content Review Content Review Content
    Review Content Review Content Review Content
    Review Content Review Content Review Content
    Review Content Review Content Review Content
    Review Content Review Content Review Content
    Review Content Review Content Review Content
    </ReviewContent>
    <ReviewButtonContainer>
      Helpful?
      <ReviewButton>Yes</ReviewButton>
      (#)
      |
      <ReviewButton>Report</ReviewButton>
    </ReviewButtonContainer>
    <EndLine/>
  </ReviewEntryContainer>
);

export default ReviewEntry;