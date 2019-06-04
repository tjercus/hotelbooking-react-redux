import React from "react";
import PropTypes from "prop-types";

import { userShape } from "./registrationConstants";

import RegistrationPersonComponent from "./RegistrationPersonComponent";
import RegistrationContactComponent from "./RegistrationContactComponent";
import RegistrationPaymentComponent from "./RegistrationPaymentComponent";
import RegistrationSummaryComponent from "./RegistrationSummaryComponent";

//const FORM_PARTS = ["person", "contact", "payment", "summary"];

const RegistrationComponent = ({ user, errors, updateUserAction, registerUserAction }) => {
  // onPreviousClick(evt) {
  // 	evt.preventDefault();
  // 	this.validateUser();
  // 	this.goPrevious();
  // }
  //
  // goPrevious() {
  // 	let currentIndex = FORM_PARTS.indexOf(this.state.currentFormPart);
  // 	let newIndex = FORM_PARTS.indexOf(this.state.currentFormPart) - 1;
  // 	let lastIndex = (FORM_PARTS.length - 1);
  // 	if (newIndex < 0) newIndex = lastIndex;
  // 	this.setState({currentFormPart: FORM_PARTS[newIndex]});
  // }
  //
  // onNextClick(evt) {
  // 	evt.preventDefault();
  // 	this.validateUser();
  // 	this.goNext();
  // }
  //
  // goNext() {
  // 	let currentIndex = FORM_PARTS.indexOf(this.state.currentFormPart);
  // 	let newIndex = FORM_PARTS.indexOf(this.state.currentFormPart) + 1;
  // 	let lastIndex = (FORM_PARTS.length - 1);
  // 	if (newIndex > lastIndex) newIndex = 0;
  // 	this.setState({currentFormPart: FORM_PARTS[newIndex]});
  // }

  return (
    <section id="regform" className={"card-panel"}>
      <form name="registration-form">
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
          className={errors.length > 0 ? "visible" : "hidden"}
        >
          <ul role="alert">
            {errors.map((msg, i) => {
              return <li key={i}>{msg}</li>;
            })}
          </ul>
        </section>

        <nav>
          <ul>
            <li>
              <a onClick={() => {}} className="btn">
                {"Previous"}
              </a>
            </li>
            <li>
              <button onClick={() => {}} className="btn">
                {"Next"}
              </button>
            </li>
          </ul>
        </nav>
      </form>
    </section>
  );
};

RegistrationComponent.propTypes = {
	user: PropTypes.shape(userShape),
	updateUserAction: PropTypes.func.isRequired,
	registerUserAction: PropTypes.func.isRequired
};

export default RegistrationComponent;
