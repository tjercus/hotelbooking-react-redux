import { connect } from "react-redux";
import App from "./App";
import { activateSceneActionCreator } from "./appActions";

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    activeScene: state.appReducer.activeScene,
  };
};

const mapDispatchToProps = dispatch => ({
  activateSceneAction: sceneName => dispatch(activateSceneActionCreator(sceneName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
