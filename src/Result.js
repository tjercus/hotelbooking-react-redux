/**
 * Return the result of an operation
 */

// TODO use algebraic type from "the most adequate guide"
export default class Result {

  constructor() {
    this.errorMessages = [];
  }

  hasError() {
    return !(this.errorMessages.length === 0);
  }

  addErrorMessage(errorMessage) {
    this.errorMessages.push(errorMessage);
  }

  addErrorMessages(_errorMessages) {
    _errorMessages.map((msg) => {
      this.addErrorMessage(msg);
    });
  }

  getErrorMessages() {
    return this.errorMessages;
  }
}
