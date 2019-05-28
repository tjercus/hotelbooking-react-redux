import React from "react";
import PROVINCES from "./PROVINCES";

const state = {
	name: null,
	gender: null,
	state: null
};

export const RegistrationPersonComponent = ({}) => {
  //
  // onChangeHandler(evt) {
  //   let data = [];
  //   data[evt.target.name] = evt.target.value;
  //   this.setState(data);
  // }
  //
  // onBlurHandler(evt) {
  //   this.props.eventbus.emit("USER_CHANGED_EVT", {
  //     key: evt.target.name,
  //     value: evt.target.value
  //   });
  // }

  return (
      <section
        id="registration-person"
        className={
          // currentFormPart === "person" ? "visible" : "hidden"
        }
      >
        <legend>Who are you?</legend>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={state.name}
            onChange={() => {}}
            onBlur={() => {}}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="gender">Gender</label>
          <label htmlFor="gender" className="pure-radio">
            <input
              type="radio"
              name="gender"
              id="gender"
              onChange={() => {}}
              onBlur={() => {}}
              value={state.gender}
            />{" "}
            male
          </label>
          <label htmlFor="gender" className="pure-radio">
            <input
              type="radio"
              name="gender"
              onChange={() => {}}
              onBlur={() => {}}
              value={state.gender}
            />{" "}
            female
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="state">State</label>
          <select
            id="state"
            name="state"
            value={state}
            onChange={() => {}}
            onBlur={() => {}}
          >
            {PROVINCES.map((state, i) => {
              return (<option key={i}>{state}</option>);
            })}
          </select>
        </fieldset>
      </section>
    );
};

export default RegistrationPersonComponent;
