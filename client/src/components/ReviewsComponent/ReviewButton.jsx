import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: white;
`;

const ReviewButton = ({handleOpenForm}) => {
  return (
    <ButtonContainer>
      <Button>MORE REVIEWS</Button>
      <Button onClick={(event)=> handleOpenForm(event)}>ADD A REVIEW  +</Button>
    </ButtonContainer>
  );
};

export default ReviewButton;