import React from "react";
import PropTypes from "prop-types";

import { userShape } from "./registrationConstants";

import RegistrationPersonComponent from "./RegistrationPersonComponent";
import RegistrationContactComponent from "./RegistrationContactComponent";
import RegistrationPaymentComponent from "./RegistrationPaymentComponent";
import RegistrationSummaryComponent from "./RegistrationSummaryComponent";

const RegistrationComponent = ({ activeScene, user, errors = [], updateUserAction, registerUserAction }) => {
  return (
    activeScene === "registration" &&
    <section id="regform" className={"card-panel"}>
      <form name="registration-form col s12">
        <RegistrationPersonComponent
          updateUserAction={updateUserAction}
        />
        <RegistrationContactComponent
          updateUserAction={updateUserAction}
        />
        <RegistrationPaymentComponent
          updateUserAction={updateUserAction}
        />
        <RegistrationSummaryComponent
          user={user}
          updateUserAction={updateUserAction}
          registerUserAction={registerUserAction}
        />

        <section
          id="error-messages"
          className={errors && errors.length > 0 ? "visible" : "hidden"}
        >
          <ul role="alert">
            {errors.map((msg, i) => {
              return <li key={i}><i className={"material-icons"}>error_outline</i> {msg}</li>;
            })}
          </ul>
        </section>
      </form>
    </section>
  );
};

RegistrationComponent.propTypes = {
  activeScene: PropTypes.string.isRequired,
	user: PropTypes.shape(userShape),
	updateUserAction: PropTypes.func.isRequired,
	registerUserAction: PropTypes.func.isRequired
};

export default RegistrationComponent;
