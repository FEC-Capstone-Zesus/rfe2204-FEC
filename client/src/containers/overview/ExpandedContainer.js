import { connect } from "react-redux";
import Expanded from "../../components/overview/Expanded.jsx";
import setMainImage from "../../../actions/setMainImage.js"
import setSlice from "../../../actions/setSlice.js"

const mapStateToProps = (state) => (
  {
    currentStyle: state.currentStyle,
    mainImage: state.mainImage,
    imagesArray: state.imagesArray,
    slice: state.slice
  }
);


var mapDispatchToProps = (dispatch) => {
  return {
    changeMainImage: (mainImage) => dispatch(setMainImage(mainImage)),
    changeSlice: (slice) => dispatch(setSlice(slice))
  };
};

const ExpandedContainer = connect(mapStateToProps, mapDispatchToProps)(Expanded);

export default ExpandedContainer;