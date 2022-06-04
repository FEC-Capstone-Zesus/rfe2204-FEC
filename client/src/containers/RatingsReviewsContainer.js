import { connect } from "react-redux";
import RatingsReviews from "../components/RatingsReviews.jsx";
import setNewFilter from "../../actions/setNewFilter.js";
import setUserIsSort from "../../actions/setUserIsSort.js";

const mapStateToProps = (state) => (
  {
    product: state.product,
    reviews: state.reviews,
    metaData: state.metaData,
    filter: state.filter,
    userIsSort: state.userIsSort
  }
);

var mapDispatchToProps = (dispatch) => {
  return {
    setNewFilter: (filter) => dispatch(setNewFilter(filter)),
    setUserIsSort: (boolValue) => dispatch(setUserIsSort(boolValue))
  };
};

const RatingsReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(RatingsReviews);

export default RatingsReviewsContainer;