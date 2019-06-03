import React, { useState } from "react";
import PropTypes from "prop-types";

const RegistrationContactComponent = ({ updateUserAction }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);

  return (
    <section id="registration-contact">
      <legend>How can we contact you?</legend>
      <fieldset className={"row"}>
        <label htmlFor="email">Email</label>
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
      </fieldset>

      <fieldset className={"row"}>
        <label htmlFor="phone">Telephone</label>
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
      </fieldset>
    </section>
  );
};

RegistrationContactComponent.propTypes = {
  updateUserAction: PropTypes.func.isRequired
};

export default RegistrationContactComponent;
