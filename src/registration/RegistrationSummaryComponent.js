import React from "react";
import PropTypes from "prop-types";
import { userShape } from "./registrationConstants";

// TODO provide inline validation
const RegistrationSummaryComponent = ({ user, registerUserAction }) => {
  return (
    <div id="registration-summary">
      <h4>Summary</h4>
      <div className={"col s12"}>
        <dl>
          <dt>Name</dt>
          <dd>{user.name}</dd>
          <dt>Gender</dt>
          <dd>{user.gender}</dd>
          <dt>State/Province</dt>
          <dd>{user.province}</dd>
          <dt>Email</dt>
          <dd>{user.email}</dd>
          <dt>Telephone</dt>
          <dd>{user.phone}</dd>
          <dt>Creditcard</dt>
          <dd>{user.creditcard}</dd>
        </dl>
      </div>

      <button
        onClick={evt => {
          evt.preventDefault();
          registerUserAction(user);
        }}
        className="btn button"
      >
        {"Register"}
      </button>
    </div>
  );
};

RegistrationSummaryComponent.propTypes = {
  user: PropTypes.shape(userShape)
};

export default RegistrationSummaryComponent;
