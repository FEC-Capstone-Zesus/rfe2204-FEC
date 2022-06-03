import { connect } from "react-redux";
import Relateditems from "../components/RelatedItems/Relateditems.jsx";
import setOutfit from "../../actions/setOutfit.js"

const mapStateToProps = (state) => (
  {
    product: state.product,
    reviews: state.reviews,
    styles: state.styles,
    metaData: state.metaData,
    questions: state.questions,
    relatedProducts: state.relatedProducts,
    loading: state.loading,
    outfit: state.outfit
  }
);

var mapDispatchToProps = (dispatch) => {
  return {
    setOutfit: (outfit) => dispatch(setOutfit(outfit))
  };
};


const RelateditemsContainer = connect(mapStateToProps, mapDispatchToProps)(Relateditems);

export default RelateditemsContainer;