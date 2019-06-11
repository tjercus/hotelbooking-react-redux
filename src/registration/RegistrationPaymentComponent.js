import React, { useState } from "react";
import PropTypes from "prop-types";

const RegistrationPaymentComponent = ({ updateUserAction }) => {
  const [creditcard, setCreditcard] = useState(0);

  return (
    <section id="registration-payment">
      <legend>{"How would you like to pay?"}</legend>
      <fieldset className={"row"}>
        <label htmlFor="creditcard">{"Creditcard "}</label>
        <input
          id="creditcard"
          name="creditcard"
          type="number"
          value={creditcard}
          onChange={evt => {
            setCreditcard(evt.target.value);
          }}
          onBlur={() => {
            updateUserAction(creditcard);
          }}
          placeholder="Creditcard"
        />
      </fieldset>
    </section>
  );
};

RegistrationPaymentComponent.propTypes = {
  updateUserAction: PropTypes.func.isRequired
};

export default RegistrationPaymentComponent;
