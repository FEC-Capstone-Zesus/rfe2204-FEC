import React, { useState } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  border: none;
  font-size: 1em;
  text-decoration: underline;
  margin-bottom: 20px;
`;

const H4 = styled.h4`
  font-size: 0.75em;
  boarder: 0;
  margin: 0;
`;

const ReviewCount = ({ count, handleSort }) => {
  if (count) {
    return (
      <H4>{count} reviews, sorted by
        <Select defaultValue={"DEFAULT"} onChange={(event)=>handleSort(event.target.value)}>
          <option value="DEFAULT" disabled>Sort On</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
          <option value="relevant">Relevant</option>
        </Select>
      </H4>
    );
  }
};

export default ReviewCount;