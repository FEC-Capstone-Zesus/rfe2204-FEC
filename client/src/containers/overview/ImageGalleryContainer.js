import { connect } from "react-redux";
import ImageGallery from "../../components/overview/ImageGallery.jsx";
import setMainImage from "../../../actions/setMainImage.js"

const mapStateToProps = (state) => (
  {
    currentStyle: state.currentStyle,
    mainImage: state.mainImage,
    imagesArray: state.imagesArray,
    startStore: state.startStore,
    endStore: state.endStore
  }
);


var mapDispatchToProps = (dispatch) => {
  return {
    changeMainImage: (mainImage) => dispatch(setMainImage(mainImage))
  };
};

const ImageGalleryContainer = connect(mapStateToProps, mapDispatchToProps)(ImageGallery);

export default ImageGalleryContainer;