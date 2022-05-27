import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  border: none;
  font-size: 1em;
  text-decoration: underline;
`;

const H4 = styled.h4`
  font-size: 0.75em;
`;

const ReviewCount = (state) => (
  <H4># reviews, sorted by
    <Select defaultValue={"DEFAULT"}>
      <option value="DEFAULT" disabled>Sort On</option>
      <option value="helpful">Helpful</option>
      <option value="newest">Newest</option>
      <option value="relevant">Relevant</option>
    </Select>
  </H4>
);

export default ReviewCount;