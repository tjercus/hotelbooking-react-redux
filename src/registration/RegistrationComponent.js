import React from "react";
import User from "./User";
import Result from "../Result";
import RegistrationPersonComponent from "./RegistrationPersonComponent";
import RegistrationContactComponent from "./RegistrationContactComponent";
import RegistrationPaymentComponent from "./RegistrationPaymentComponent";
import RegistrationSummaryComponent from "./RegistrationSummaryComponent";

const FORM_PARTS = [
	"person",
	"contact",
	"payment",
	"summary"
];

const state = {
	isVisible: false,
	currentFormPart: "person",
	errorMessages: []
};

const RegistrationComponent = () => {

  // onPreviousClick(evt) {
  // 	evt.preventDefault();
  // 	this.validateUser();
  // 	this.goPrevious();
  // }
	//
  // goPrevious() {
  // 	let currentIndex = FORM_PARTS.indexOf(this.state.currentFormPart);
  // 	let newIndex = FORM_PARTS.indexOf(this.state.currentFormPart) - 1;
  // 	let lastIndex = (FORM_PARTS.length - 1);
  // 	if (newIndex < 0) newIndex = lastIndex;
  // 	this.setState({currentFormPart: FORM_PARTS[newIndex]});
  // }
	//
  // onNextClick(evt) {
  // 	evt.preventDefault();
  // 	this.validateUser();
  // 	this.goNext();
	// }
	//
	// goNext() {
  // 	let currentIndex = FORM_PARTS.indexOf(this.state.currentFormPart);
  // 	let newIndex = FORM_PARTS.indexOf(this.state.currentFormPart) + 1;
  // 	let lastIndex = (FORM_PARTS.length - 1);
  // 	if (newIndex > lastIndex) newIndex = 0;
  // 	this.setState({currentFormPart: FORM_PARTS[newIndex]});
  // }

  return <section id="regform" className={}>
		<form name="registration-form" className="pure-form pure-form-stacked">
			<RegistrationPersonComponent currentFormPart={state.currentFormPart}/>
			<RegistrationContactComponent currentFormPart={state.currentFormPart}/>
			<RegistrationPaymentComponent currentFormPart={state.currentFormPart}/>
			<RegistrationSummaryComponent currentFormPart={state.currentFormPart}/>

			<section id="error-messages" className={state.errorMessages.length > 0 ? 'visible' : 'hidden'}>
				<ul role="alert">
					{state.errorMessages.map((msg, i) => {
						return (<li key={i}>{msg}</li>);
					})}
				</ul>
			</section>

			<nav>
				<ul>
					<li><a onClick={() => {
					}} className="btn">{"Previous"}</a></li>
					<li>
						<button onClick={() => {
						}} className="btn">{"Next"}</button>
					</li>
				</ul>
			</nav>
		</form>
	</section>
  };

export default RegistrationComponent;

// RegistrationComponent.prototype.propTypes: {
// 	value: React.PropTypes.object.isRequired,
//   onChange: React.PropTypes.func.isRequired
// }

