import { connect } from "react-redux";
import ImageGallery from "../../components/overview/ImageGallery.jsx";
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

const ImageGalleryContainer = connect(mapStateToProps, mapDispatchToProps)(ImageGallery);

export default ImageGalleryContainer;