import React, {useState} from 'react';
import RatingAndStar from './RatingAndStar.jsx';
import Factors from './Factors.jsx';
import Votes from './Votes.jsx';
import styled from 'styled-components';

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Ratings = ({ratings, recommended, factors, handleUserSelect }) => {
  const [filter, setFilter] = useState({ '5': false, '4': false, '3': false, '2': false, '1': false });
  const [userfilter, setUserFilter] = useState([]);
  const [meta, setMeta] = useState({ratings, recommended, factors});

  const handlefilter = (event, star) => {
    event.preventDefault();
    let newState = JSON.parse(JSON.stringify(filter));
    newState[star] = !filter[star];
    setFilter(newState);
    handleUserSelect(filter);
  };

  const handleClear = (event) => {
    event.preventDefault();
    setFilter({ '5': false, '4': false, '3': false, '2': false, '1': false });
  };

  return (
    <RatingContainer>
      <RatingAndStar rate={ ratings } meta={meta}/>
      <Votes recommended={ recommended } rateNumber={ ratings } filter={filter} handleFilter={handlefilter} handleClear={handleClear}/>
      <Factors factors={ factors }/>
    </RatingContainer>
  );
};
export default Ratings;