import React from 'react';
import styled from 'styled-components';

const RateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-decoration: underline;
  font-size: 13px;
  align-items: center;
  padding-top: 5px;

`;

const Span = styled.div`
  width: 20%;
`;
const BarContainer = styled.div`
  width: 70%;
  height: 7px;
  background-color: #f1f1f1;
`;

const Bar = styled.div`
  width: ${props => props.length};
  height: 7px;
  background-color: green;
`;

const RateCount = styled.div`
  width: 11px;
`;

const P = styled.p`
  padding-top: 5px;
  font-size: 0.58em;
`;

const Votes = ({ recommended, rateNumber }) => {
  var percent;
  var ratingTotal = 0;
  if (recommended) {
    percent = Math.round((Number(recommended.true) / (Number(recommended.false) + Number(recommended.true))) * 100);
  }
  if (rateNumber) {
    for (var key of Object.keys(rateNumber)) {
      ratingTotal += Number(rateNumber[key]);
    }
    var star_5 = rateNumber[5] ? (Number(rateNumber[5]) / ratingTotal) * 100 : 0;
    var star_4 = rateNumber[4] ? (Number(rateNumber[4]) / ratingTotal) * 100 : 0;
    var star_3 = rateNumber[3] ? (Number(rateNumber[3]) / ratingTotal) * 100 : 0;
    var star_2 = rateNumber[2] ? (Number(rateNumber[2]) / ratingTotal) * 100 : 0;
    var star_1 = rateNumber[1] ? (Number(rateNumber[1]) / ratingTotal) * 100 : 0;
    var count5 = rateNumber[5] || 0;
    var count4 = rateNumber[4] || 0;
    var count3 = rateNumber[3] || 0;
    var count2 = rateNumber[2] || 0;
    var count1 = rateNumber[1] || 0;
  }
  return (
    <>
      <P>{percent}% of reviews recommend this product</P>
      <RateContainer>
        <Span>5 stars</Span>
        <BarContainer>
          <Bar length={star_5+'%'} />
        </BarContainer>
        <RateCount>{count5}</RateCount>
      </RateContainer>

      <RateContainer>
        <Span>4 stars</Span>
        <BarContainer>
          <Bar length={star_4+'%'} />
        </BarContainer>
        <RateCount>{count4}</RateCount>
      </RateContainer>

      <RateContainer>
        <Span>3 stars</Span>
        <BarContainer>
          <Bar length={star_3+'%'} />
        </BarContainer>
        <RateCount>{count3}</RateCount>
      </RateContainer>

      <RateContainer>
        <Span>2 stars</Span>
        <BarContainer>
          <Bar length={star_2+'%'} />
        </BarContainer>
        <RateCount>{count2}</RateCount>
      </RateContainer>

      <RateContainer>
        <Span>1 stars</Span>
        <BarContainer>
          <Bar length={star_1+'%'} />
        </BarContainer>
        <RateCount>{count1}</RateCount>
      </RateContainer>
    </>
  );
};

export default Votes;