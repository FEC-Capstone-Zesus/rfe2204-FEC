import React from 'react';
import RatingAndStar from './RatingAndStar.jsx';
import Factors from './Factors.jsx';
import Votes from './Votes.jsx';
import styled from 'styled-components';

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        'filter_5': false,
        'filter_4': false,
        'filter_3': false,
        'filter_2': false,
        'filter_1': false
      }
    };
    this.handlefilter = this.handlefilter.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handlefilter(event, star) {
    event.preventDefault();
    const { filter } = this.state;
    filter[star] = !this.state.filter[star];
    this.setState({ filter });
  }
  handleClear(event) {
    event.preventDefault();
    this.setState({ filter: {
      'filter_5': false,
      'filter_4': false,
      'filter_3': false,
      'filter_2': false,
      'filter_1': false
    }});
  }

  render() {
    return (
      <RatingContainer>
        <RatingAndStar rate={ this.props.ratings } meta={this.props}/>
        <Votes recommended={ this.props.recommended } rateNumber={ this.props.ratings } filter={this.state.filter} handleFilter={this.handlefilter} handleClear={this.handleClear}/>
        <Factors factors={ this.props.factors }/>
      </RatingContainer>
    );
  }
}


export default Ratings;

