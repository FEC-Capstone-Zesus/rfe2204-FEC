import { connect } from "react-redux";
import Overview from "../../components/overview/Overview.jsx";
import toggleExpanded from "../../../actions/toggleExpanded.js"

const mapStateToProps = (state) => (
  {
    expanded: state.expanded,
  }
);

var mapDispatchToProps = (dispatch) => {
  return {
    toggleExpanded: (expanded) => dispatch(toggleExpanded(expanded))
  };
};

const OverviewContainer = connect(mapStateToProps, mapDispatchToProps)(Overview);

export default OverviewContainer;