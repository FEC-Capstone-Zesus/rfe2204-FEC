import React from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
  width: 100%; 
  height: 6px;
  background-color: #f1f1f1;
  padding-left: 10px;
  max-width: 90%;
`;

const Indicator = styled.div`
  width: 0;
  height: 0;
  border-top: 15px solid;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  margin-left: 50%;
`;

const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
const FactorsLable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: small;
  margin-top: 10px;
`;


const WidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;
const ComfortContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;
const QualityContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;
const LengthContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;
const FitContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const Factors = () => (
  <>
    <SizeContainer>
      <div><strong>Size</strong></div>
      <BarContainer><Indicator/></BarContainer>
      <FactorsLable>
        <label>bad</label>
        <label>perfect</label>
        <label>good</label>
      </FactorsLable>
    </SizeContainer>

    <WidthContainer>
      <div><strong>Width</strong></div>
      <BarContainer><Indicator/></BarContainer>
      <FactorsLable>
        <label>bad</label>
        <label>perfect</label>
        <label>good</label>
      </FactorsLable>
    </WidthContainer>

    <ComfortContainer>
      <div><strong>Comfort</strong></div>
      <BarContainer><Indicator/></BarContainer>
      <FactorsLable>
        <label>bad</label>
        <label>perfect</label>
        <label>good</label>
      </FactorsLable>
    </ComfortContainer>

    <QualityContainer>
      <div><strong>Quality</strong></div>
      <BarContainer><Indicator/></BarContainer>
      <FactorsLable>
        <label>bad</label>
        <label>perfect</label>
        <label>good</label>
      </FactorsLable>
    </QualityContainer>

    <LengthContainer>
      <div><strong>Length</strong></div>
      <BarContainer><Indicator/></BarContainer>
      <FactorsLable>
        <label>bad</label>
        <label>perfect</label>
        <label>good</label>
      </FactorsLable>
    </LengthContainer>

    <FitContainer>
      <div><strong>Fit</strong></div>
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