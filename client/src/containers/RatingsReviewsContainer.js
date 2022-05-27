import { connect } from "react-redux";
import RatingsReviews from "../components/RatingsReviews.jsx";

const mapStateToProps = (state) => (
  {
    product: state.product,
    reviews: state.reviews,
    metaData: state.metaData
  }
);

const RatingsReviewsContainer = connect(mapStateToProps)(RatingsReviews);

export default RatingsReviewsContainer;