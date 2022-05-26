import { connect } from "react-redux";
import ImageGallery from "../../components/overview/ImageGallery.jsx";

const mapStateToProps = (state) => (
  {
    currentStyle: state.currentStyle
  }
);

const ImageGalleryContainer = connect(mapStateToProps)(ImageGallery);

export default ImageGalleryContainer;