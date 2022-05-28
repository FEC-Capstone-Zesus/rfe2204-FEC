import { connect } from "react-redux";
import Overview from "../../components/overview/Overview.jsx";
import setCurrentStyle from "../../../actions/setCurrentStyle.js"

const mapStateToProps = (state) => (
  {
    product: state.product,
    styles: state.styles,
    currentStyle: state.currentStyle,
    reviews: state.reviews,
    metaData: state.metaData,
    toggle: state.toggle
  }
);

var mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentStyle: (currentStyle) => dispatch(setCurrentStyle(currentStyle))
  };
};

const OverviewContainer = connect(mapStateToProps, mapDispatchToProps)(Overview);

export default OverviewContainer;