import React, {useState} from "react";
import PropTypes from "prop-types";

import PROVINCES from "./PROVINCES";

export const RegistrationPersonComponent = ({updateUserAction}) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [province, setProvince] = useState("");

  return (
    <section id="registration-person" className={""}>
      <legend>Who are you?</legend>
      <fieldset className={"row"}>
        <i className="material-icons prefix">account_circle</i>
        <label htmlFor="name">{"Name"}</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={evt => setName(evt.target.value)}
          onBlur={() => {
            updateUserAction({name: name});
          }}
        />
      </fieldset>
      <div className={"row"}>
        <label htmlFor="gender">Gender</label>
        <label htmlFor="gender">
          <input
            type="radio"
            name="gender"
            id="gender"
            onChange={() => setGender("m")}
            onBlur={() => {
              updateUserAction({gender: "m"});
            }}
            value={gender}
          />
          <span>{" male"}</span>
        </label>
        <label htmlFor="gender">
          <input
            type="radio"
            name="gender"
            onChange={() => setGender("f")}
            onBlur={() => {
              updateUserAction({gender: "f"})
            }}
            value={gender}
          />
          <span>{" female"}</span>
        </label>
      </div>
      <fieldset className={"row"}>
        <label htmlFor="state">State/Province</label>
        <select
          id="province"
          name="province"
          value={province}
          onChange={evt => setProvince(evt.target.value)}
          onBlur={() => {
            updateUserAction({province: province});
          }}
        >
          {PROVINCES.map((prov, i) => {
            return <option key={i}>{prov}</option>;
          })}
        </select>
      </fieldset>
    </section>
  );
};

RegistrationPersonComponent.propTypes = {
  updateUserAction: PropTypes.func.isRequired
};

export default RegistrationPersonComponent;
