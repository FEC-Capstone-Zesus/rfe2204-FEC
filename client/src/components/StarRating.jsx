import styled from "styled-components";

const StarRatingContainer = styled.span`
  &:hover {
    cursor: default;
  }
`
const StarFraction = styled.span`
 display: block;
 overflow: hidden;
 width: ${({starFraction}) => (starFraction ? `${starFraction}%` : '')};
`

const StarRating = ( { ratings } ) => {

  var averageRating = 0;
  var starFraction = 0.01;
  var ariaRating = '';

  if (typeof ratings === 'object') {
    var ratings = Object.entries(ratings.ratings);
    var total = 0;

    averageRating = ratings.reduce((stars, rating) => {
      total = total + parseInt(rating[1]);
      return stars + (rating[0] * rating[1]);
    }, 0) / total;

    starFraction = Math.max((Math.round((averageRating % 1) * 4) / 4) * 100, 0.01);
    starFraction = starFraction === 75 ? 62 : starFraction;
    starFraction = starFraction === 25 ? 40 : starFraction;

    ariaRating = Math.floor(averageRating) + (Math.round((averageRating % 1) * 4) / 4);
  } else if (typeof ratings === 'number') {
    averageRating = ratings;
    ariaRating = ratings;
  }

  return (
    <StarRatingContainer>
      <span aria-label={`Rated ${ariaRating} out of 5 stars.`}>{('★').repeat(Math.floor(averageRating))}</span>
      <span style={{ position: 'absolute' }}>
        <StarFraction starFraction={starFraction}>
          <span>★</span>
        </StarFraction>
      </span>
      <span>{('☆').repeat(5 - Math.floor(averageRating))}</span>
    </StarRatingContainer>
  );
}

export default StarRating