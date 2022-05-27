import { connect } from "react-redux";
import RatingsAndStyles from "../../components/overview/RatingsAndStyles.jsx";
import setCurrentStyle from "../../../actions/setCurrentStyle.js"
import setMainImage from "../../../actions/setMainImage.js"
import setImagesArray from "../../../actions/setImagesArray.js"
import setSlice from "../../../actions/setSlice.js"

const mapStateToProps = (state) => (
  {
    product: state.product,
    styles: state.styles,
    currentStyle: state.currentStyle,
    reviews: state.reviews,
    metaData: state.metaData
  }
);

var mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentStyle: (currentStyle) => dispatch(setCurrentStyle(currentStyle)),
    changeMainImage: (mainImage) => dispatch(setMainImage(mainImage)),
    changeImagesArray: (imagesArray) => dispatch(setImagesArray(imagesArray)),
    changeSlice: (slice) => dispatch(setSlice(slice))
  };
};

const RatingsAndStylesContainer = connect(mapStateToProps, mapDispatchToProps)(RatingsAndStyles);

export default RatingsAndStylesContainer;