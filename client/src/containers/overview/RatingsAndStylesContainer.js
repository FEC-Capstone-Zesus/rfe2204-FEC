import { connect } from "react-redux";
import RatingsAndStyles from "../../components/overview/RatingsAndStyles.jsx";
import setCurrentStyle from "../../actions/setCurrentStyle.js"

const mapStateToProps = (state) => (
  {
    styles: state.styles,
    reviews: state.reviews
  }
);

var mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentStyle: (currentStyle) => dispatch(setCurrentStyle(currentStyle))
  };
};

const RatingsAndStylesContainer = connect(mapStateToProps, mapDispatchToProps)(RatingsAndStyles);

export default RatingsAndStylesContainer;