import { connect } from "react-redux";
import ImageGallery from "../../components/overview/ImageGallery.jsx";

const mapStateToProps = (state) => (
  {
    currentStyle: state.currentStyle,
    currentStyleId: state.currentStyleId
  }
);

const ImageGalleryContainer = connect(mapStateToProps)(ImageGallery);

export default ImageGalleryContainer;