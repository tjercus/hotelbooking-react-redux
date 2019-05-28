import React from "react";
//import User from "../models/User";
//import Result from "../models/Result";

const state = {
	name: null,
	gender: null,
	state: null,
	email: null,
	phone: null,
	creditcard: null
}

const RegistrationSummaryComponent  = ({currentFormPart}) => {
		return (
			<section id="registration-summary"
				className={currentFormPart === 'summary' ? 'visible' : 'hidden'}>
						<legend>Summary</legend>
						<fieldset>
							<dl>
								<dt>Name</dt>
								<dd>{this.state.name}</dd>
								<dt>Gender</dt>
								<dd>{this.state.gender}</dd>
								<dt>State</dt>
								<dd>{this.state.state}</dd>
								<dt>Email</dt>
								<dd>{this.state.email}</dd>
								<dt>Telephone</dt>
								<dd>{this.state.phone}</dd>
								<dt>Name</dt>
								<dd>{this.state.creditcard}</dd>
							</dl>
						</fieldset>

						<button onClick={() => {}} className="pure-button pure-button-primary">{"Register"}</button>
			</section>
			)
		};

export default RegistrationSummaryComponent;
