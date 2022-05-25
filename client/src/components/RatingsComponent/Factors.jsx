import React from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
  width: 100%; 
  height: 5px;
  background-color: #f1f1f1;
  padding-left: 10px;
  max-width: 96%;
`;

const Indicator = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-left: 50%;
`;

const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const FactorsLable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: 0.5em;
  margin-top: 10px;
`;

const WidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const ComfortContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const QualityContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const LengthContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const FitContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Span = styled.span`
  font-size: 0.75em;
`;

const Factors = () => (
  <>
    <SizeContainer>
      <Span>Size</Span>
      <BarContainer><Indicator/></BarContainer>
      <FactorsLable>
        <label>bad</label>
        <label>perfect</label>
        <label>good</label>
      </FactorsLable>
    </SizeContainer>

    <WidthContainer>
      <Span>Width</Span>
      <BarContainer><Indicator/></BarContainer>
      <FactorsLable>
        <label>bad</label>
        <label>perfect</label>
        <label>good</label>
      </FactorsLable>
    </WidthContainer>

    <ComfortContainer>
      <Span>Comfort</Span>
      <BarContainer><Indicator/></BarContainer>
      <FactorsLable>
        <label>bad</label>
        <label>perfect</label>
        <label>good</label>
      </FactorsLable>
    </ComfortContainer>

    <QualityContainer>
      <Span>Quality</Span>
      <BarContainer><Indicator/></BarContainer>
      <FactorsLable>
        <label>bad</label>
        <label>perfect</label>
        <label>good</label>
      </FactorsLable>
    </QualityContainer>

    <LengthContainer>
      <Span>Length</Span>
      <BarContainer><Indicator/></BarContainer>
      <FactorsLable>
        <label>bad</label>
        <label>perfect</label>
        <label>good</label>
      </FactorsLable>
    </LengthContainer>

    <FitContainer>
      <Span>Fit</Span>
      <BarContainer><Indicator/></BarContainer>
      <FactorsLable>
        <label>bad</label>
        <label>perfect</label>
        <label>good</label>
      </FactorsLable>
    </FitContainer>
  </>
);

export default Factors;