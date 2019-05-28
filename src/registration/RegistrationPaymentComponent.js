import React from "react";

const state = {
	creditcard: null
};

const RegistrationPaymentComponent = ({currentFormPart}) => {

	// onChangeHandler(evt) {
  // 	let data = [];
  // 	data[evt.target.name] = evt.target.value;
  // 	this.setState(data);
  // }
	//
  // onBlurHandler(evt) {
  // 	this.props.eventbus.emit("USER_CHANGED_EVT", {key: evt.target.name, value: evt.target.value});
  // }

		return (
			<section id="registration-payment"
				className={currentFormPart === 'payment' ? 'visible' : 'hidden'}>
						<legend>How would you like to pay?</legend>
						<fieldset>
							<label htmlFor="creditcard">Creditcard</label>
							<input id="creditcard" name="creditcard" type="number"
								value={state.creditcard}
								onChange={() => {}}
								onBlur={() => {}}
								placeholder="Creditcard"/>
						</fieldset>
			</section>
			);

};

export default RegistrationPaymentComponent;
