import { connect } from "react-redux";
import Relateditems from "../components/Relateditems.jsx";

const mapStateToProps = (state) => (
  {
    product: state.product,
    reviews: state.reviews,
    styles: state.styles,
    metaData: state.metaData,
    questions: state.questions,
    relatedProducts: state.relatedProducts,
    loading: state.loading
  }
);


const RelateditemsContainer = connect(mapStateToProps)(Relateditems);

export default RelateditemsContainer;