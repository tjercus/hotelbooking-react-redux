import { connect } from "react-redux";
import { registerUserActionCreater, updateUserActionCreator } from "./registrationActions";
import RegistrationComponent from "./RegistrationComponent";

const mapStateToProps = state => {
  console.log("RegistrationContainer.mapStateToProps", state);
  return {
    user: state.registrationReducer.user,
    errors: state.registrationReducer.errors
  };
};

const mapDispatchToProps = dispatch => ({
  updateUserAction: data => dispatch(updateUserActionCreator(data)),
  registerUserAction: user => dispatch(registerUserActionCreater(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationComponent);
