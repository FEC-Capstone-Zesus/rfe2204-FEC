import React, {useState} from 'react';
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

const ReviewCount = ({count, handleSort}) => {
  const [value, setValue] = useState('');

  if (count) {
    return (
      <H4>{count} reviews, sorted by
        <Select value={value} onChange={(event)=>{setValue(event.target.value); handleSort(event.target.value)}} data-testid='sort'>
          <option value="helpful" name='helpfulOption'>Helpful</option>
          <option value="newest" name='newestOption'>Newest</option>
          <option value="relevant" name='relevantOption'>Relevant</option>
        </Select>
      </H4>
    );
  }
};
export default ReviewCount;