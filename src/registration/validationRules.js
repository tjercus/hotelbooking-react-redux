import { curry, compose, prop } from "ramda";

const isEmailAddress = a => /[a-z@.]/.test(a);
const isGreaterThan = curry((len, a) => a > len);
const isLengthGreaterThan = len =>
  compose(
    isGreaterThan(len),
    prop("length")
  );
const isNumeric = a => /[0-9]/.test(a);

export const validationRules = {
  name: [[isLengthGreaterThan(5), `Minimum Name length of 6 is required.`]],
  email: [[isEmailAddress, "e-mail address should have an e-mail pattern"]],
  phone: [[isNumeric, "Should be numeric"]]
};
