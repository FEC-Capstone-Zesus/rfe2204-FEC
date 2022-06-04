import React, {useState} from 'react';
import RatingAndStar from './RatingAndStar.jsx';
import Factors from './Factors.jsx';
import Votes from './Votes.jsx';
import styled from 'styled-components';

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Ratings = ({ratings, recommended, factors, filter, setNewFilter, setUserIsSort, userIsSort }) => {
  const [meta, setMeta] = useState({ratings, recommended, factors});
  const handlefilter = (event, star) => {
    event.preventDefault();
    let newState = {...filter};
    let temp = newState[star];
    newState[star] = !temp;
    setNewFilter(newState);
    if (!filter[1] && !filter[2] && !filter[3] && !filter[4] && !filter[5]) {
      setUserIsSort(false)
    } else {
      setUserIsSort(true)
    }
  };


  const handleClear = (event) => {
    event.preventDefault();
    setNewFilter({ 5: false, 4: false, 3: false, 2: false, 1 : false });
    setUserIsSort(false);
  };

  return (
    <RatingContainer>
      <RatingAndStar rate={ratings} meta={meta}/>
      <Votes recommended={recommended} rateNumber={ratings} filter={filter} handleFilter={handlefilter} handleClear={handleClear}/>
      <Factors factors={ factors }/>
    </RatingContainer>
  );
};
export default Ratings;