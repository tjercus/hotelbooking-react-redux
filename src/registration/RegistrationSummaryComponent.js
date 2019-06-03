import React from "react";
import PropTypes from "prop-types";
import { userShape } from "./registrationConstants";

const RegistrationSummaryComponent  = ({user, registerUserAction}) => {
		return (
			<section id="registration-summary">
						<legend>Summary</legend>
						<fieldset>
							<dl>
								<dt>Name</dt>
								<dd>{user.name}</dd>
								<dt>Gender</dt>
								<dd>{user.gender}</dd>
								<dt>State/Province</dt>
								<dd>{user.province}</dd>
								<dt>Email</dt>
								<dd>{user.email}</dd>
								<dt>Telephone</dt>
								<dd>{user.phone}</dd>
								<dt>Creditcard</dt>
								<dd>{user.creditcard}</dd>
							</dl>
						</fieldset>

						<button onClick={() => {registerUserAction(user)}} className="btn button">{"Register"}</button>
			</section>
			)
		};

RegistrationSummaryComponent.propTypes = {
	user: PropTypes.shape(userShape)
};

export default RegistrationSummaryComponent;
