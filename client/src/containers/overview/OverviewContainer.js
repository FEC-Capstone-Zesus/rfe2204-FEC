import { connect } from "react-redux";
import Overview from "../../components/overview/Overview.jsx";

const mapStateToProps = (state) => (
  {
    product: state.product,
    reviews: state.reviews,
    styles: state.styles
  }
);

const OverviewContainer = connect(mapStateToProps)(Overview);

export default OverviewContainer;