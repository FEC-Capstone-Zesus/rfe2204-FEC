import { connect } from 'react-redux';
import App from '../components/App.jsx';

var mapStateToProps = (state) => ({
  product: state.product,
});

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

var AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
