import styled from "styled-components";

const StarFraction = styled.span`
 display: block;
 overflow: hidden;
 width: ${({starFraction}) => (starFraction ? `${starFraction}%` : '')};
`

const StarRating = ( { ratings } ) => {

  var averageRating = 0;
  var starFraction = 0;

  if (ratings.product_id) {
    var ratings = Object.entries(ratings.ratings);
    var total = 0;

    averageRating = ratings.reduce((stars, rating) => {
      total = total + parseInt(rating[1]);
      return stars + (rating[0] * rating[1]);
    }, 0) / total;

    starFraction = (Math.round((averageRating % 1) * 4) / 4) * 100;
  } else {
    averageRating = ratings;
  }

  return (
    <>
      <span>{('★').repeat(Math.floor(averageRating))}</span>
      <span style={{ position: 'absolute' }}>
        <StarFraction starFraction={starFraction}>
          <span>★</span>
        </StarFraction>
      </span>
      <span>{('☆').repeat(5 - Math.floor(averageRating))}</span>
    </>
  );
}

export default StarRating