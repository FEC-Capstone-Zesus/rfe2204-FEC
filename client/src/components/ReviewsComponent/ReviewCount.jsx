import React from 'react';
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

class ReviewCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.value = '';
  }
  render() {
    if (this.props.count) {
      return (
        <H4>{this.props.count} reviews, sorted by
          <Select value={this.value} onChange={(event)=>{this.props.handleSort(event.target.value); this.value = event.target.value}} data-testid='sort'>
            <option value="helpful" name='helpfulOption'>Helpful</option>
            <option value="newest" name='newestOption'>Newest</option>
            <option value="relevant" name='relevantOption'>Relevant</option>
          </Select>
        </H4>
      );
    }
  }
}

export default ReviewCount;