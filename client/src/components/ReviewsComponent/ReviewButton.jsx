import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Button = styled.button`
  padding: 20px;
  background-color: white;
`;

const ReviewButton = ({listLength, currLength, load}) => (
  <ButtonContainer>
    {listLength > currLength || listLength > 2 ? 
      <Button onClick={(e) => load(e)}>MORE REVIEWS</Button> : null}
    <Button>ADD A REVIEW  +</Button>
  </ButtonContainer>
);

export default ReviewButton;