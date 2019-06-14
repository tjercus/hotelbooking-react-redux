import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Materialize from "materialize-css";

const RegistrationPaymentComponent = ({ updateUserAction }) => {
  const [creditcard, setCreditcard] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      Materialize.updateTextFields();
      const elems = document.querySelectorAll('select');
      Materialize.FormSelect.init(elems);
    }, 1000);
  });

  return (
    <section id="registration-payment" className={"row"}>
      <div className={"input-field col s6"}>
        <i className="material-icons prefix">credit_card</i>
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
      </div>
    </section>
  );
};

RegistrationPaymentComponent.propTypes = {
  updateUserAction: PropTypes.func.isRequired
};

export default RegistrationPaymentComponent;
