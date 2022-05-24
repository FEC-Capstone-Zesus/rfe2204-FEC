import React from 'react';
import styled from 'styled-components';

const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
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
      <span>Size</span>
    </SizeContainer>

    <WidthContainer>
      <span>Width</span>
    </WidthContainer>

    <ComfortContainer>
      <span>Comfort</span>
    </ComfortContainer>

    <QualityContainer>
      <span>Quality</span>
    </QualityContainer>

    <LengthContainer>
      <span>Length</span>
    </LengthContainer>

    <FitContainer>
      <span>Fit</span>
    </FitContainer>
  </>
);

export default Factors;