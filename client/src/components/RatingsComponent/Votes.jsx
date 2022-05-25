import React from 'react';
import styled from 'styled-components';

const RateContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-decoration: underline;
  font-size: 13px;
  align-items: center;
  padding-top: 5px;
`;

const Span = styled.div`
  width: 30%;
`;
const BarContainer = styled.div`
  width: 100%;
  height: 7px;
  background-color: #f1f1f1;
`;
const Bar5 = styled.div`
  width: 60%;
  height: 7px;
  background-color: black;
`;
const Bar4 = styled.div`
  width: 50%;
  height: 7px;
  background-color: black;
`;
const Bar3 = styled.div`
  width: 40%;
  height: 7px;
  background-color: black;
`;
const Bar2 = styled.div`
  width: 30%;
  height: 7px;
  background-color: black;
`;
const Bar1 = styled.div`
  width: 20%;
  height: 7px;
  background-color: black;
`;

const P = styled.p`
  font-size: 0.75em;
`;

const Votes = (props) => (
  <>
    <P>#% of reviews recommend this product</P>
    <RateContainer>
      <Span>5 stars</Span>
      <BarContainer>
        <Bar5/>
      </BarContainer>
    </RateContainer>

    <RateContainer>
      <Span>4 stars</Span>
      <BarContainer>
        <Bar4/>
      </BarContainer>
    </RateContainer>

    <RateContainer>
      <Span>3 stars</Span>
      <BarContainer>
        <Bar3/>
      </BarContainer>
    </RateContainer>

    <RateContainer>
      <Span>2 stars</Span>
      <BarContainer>
        <Bar2/>
      </BarContainer>
    </RateContainer>

    <RateContainer>
      <Span>1 stars</Span>
      <BarContainer>
        <Bar1/>
      </BarContainer>
    </RateContainer>
  </>
);

export default Votes;