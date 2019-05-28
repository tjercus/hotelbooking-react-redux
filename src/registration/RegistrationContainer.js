import { connect } from "react-redux";
import { updateUserActionCreator } from "./registrationActions";
import RegistrationComponent from "./RegistrationComponent";

const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => ({
  updateUserAction: item => dispatch(updateUserActionCreator(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationComponent);
