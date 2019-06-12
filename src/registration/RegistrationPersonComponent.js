import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import PROVINCES from "./PROVINCES";
import Materialize from "materialize-css";

export const RegistrationPersonComponent = ({updateUserAction}) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [province, setProvince] = useState("");

  useEffect(() => {
    setTimeout(() => {
      Materialize.updateTextFields();
      const elems = document.querySelectorAll('select');
      Materialize.FormSelect.init(elems);
      // alert("materialize loaded");
    }, 1000);
  });

  return (
    <section id="registration-person">
      <div className={"row"}>
        <div className={"input-field col s6"}>
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
        </div>
        <div className={"input-field col s6"}>
          <p>
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
          </p>
          <p>
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
          </p>
        </div>
      </div>
      <div className={"row"}>
        <div className={"input-field col s6"}>
          <i className="material-icons prefix">location_on</i>
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
              return <option key={i} value={prov}>{prov}</option>;
            })}
          </select>
        </div>
       </div>
    </section>
  );
};

RegistrationPersonComponent.propTypes = {
  updateUserAction: PropTypes.func.isRequired
};

export default RegistrationPersonComponent;
