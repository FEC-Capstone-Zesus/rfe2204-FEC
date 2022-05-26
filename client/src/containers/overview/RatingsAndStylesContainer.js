import { connect } from "react-redux";
import RatingsAndStyles from "../../components/overview/RatingsAndStyles.jsx";
import setCurrentStyle from "../../../actions/setCurrentStyle.js"
import setMainImage from "../../../actions/setMainImage.js"
import setImagesArray from "../../../actions/setImagesArray.js"

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
    changeImagesArray: (imagesArray) => dispatch(setImagesArray(imagesArray))
  };
};

const RatingsAndStylesContainer = connect(mapStateToProps, mapDispatchToProps)(RatingsAndStyles);

export default RatingsAndStylesContainer;