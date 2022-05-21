import { connect } from "react-redux";
import App from "../components/App.jsx";

const mapStateToProps = (state) => (
  {
    product: state.product,
    reviews: state.reviews,
    styles: state.styles,
    metaData: state.metaData,

  }
);

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;