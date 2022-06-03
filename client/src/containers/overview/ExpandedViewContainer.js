import { connect } from "react-redux";
import ExpandedView from "../../components/overview/ExpandedView.jsx";
import setMainImage from "../../../actions/setMainImage.js";
import setSlice from "../../../actions/setSlice.js";
import toggleExpanded from "../../../actions/toggleExpanded.js";

const mapStateToProps = (state) => (
  {
    mainImage: state.mainImage,
    imagesArray: state.imagesArray,
    slice: state.slice
  }
);

var mapDispatchToProps = (dispatch) => {
  return {
    changeMainImage: (mainImage) => dispatch(setMainImage(mainImage)),
    changeSlice: (slice) => dispatch(setSlice(slice)),
    toggleExpanded: (expanded) => dispatch(toggleExpanded(expanded))
  };
};

const ExpandedViewContainer = connect(mapStateToProps, mapDispatchToProps)(ExpandedView);

export default ExpandedViewContainer;