import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: white;
`;

const ReviewButton = () => (
  <ButtonContainer>
    <Button>MORE REVIEWS</Button>
    <Button>ADD A REVIEW  +</Button>
  </ButtonContainer>
);

export default ReviewButton;