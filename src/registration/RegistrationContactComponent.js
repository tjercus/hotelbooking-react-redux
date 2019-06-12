import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Materialize from "materialize-css";

const RegistrationContactComponent = ({ updateUserAction }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      Materialize.updateTextFields();
      const elems = document.querySelectorAll('select');
      Materialize.FormSelect.init(elems);
      // alert("materialize loaded");
    }, 1000);
  });

  return (
    <section id="registration-contact" className={"row"}>
      <div className={"input-field col s6"}>
        <i className="material-icons prefix">email</i>
        <label htmlFor="email">{"Email "}</label>
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={evt => {
            setEmail(evt.target.value);
          }}
          onBlur={() => {
            updateUserAction({ email: email });
          }}
          placeholder="Email"
        />
      </div>

      <div className={"input-field col s6"}>
        <i className="material-icons prefix">phone</i>
        <label htmlFor="phone">{"Telephone "}</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={evt => {
            setPhone(evt.target.value);
          }}
          onBlur={() => {
            updateUserAction({ phone: phone });
          }}
          placeholder="Telephone"
        />
      </div>
    </section>
  );
};

RegistrationContactComponent.propTypes = {
  updateUserAction: PropTypes.func.isRequired
};

export default RegistrationContactComponent;
