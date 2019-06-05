import { curry, compose, prop } from "ramda";
import Validation from "folktale/validation";

// Folktale versions of algebraic Either.Right and Either.Left
const { Success, Failure } = Validation;

const isGreaterThan = curry((len, a) => a > len);

const isGreaterThanFive = isGreaterThan(5);

const isOfEqualLength = curry((len, a) => a === len);

const isLengthEqualTo = len =>
  compose(
    isOfEqualLength(len),
    prop("length")
  );

const isTenLong = isLengthEqualTo(10);

const isEmailPattern = str => /[a-z@.]/.test(str);

const isNumeric = str => /[0-9]/.test(str);

const validateNumeric = a => isNumeric(a) ? Success(a) : Failure(["Not numeric"]);

const validateLongerThanFive = str => isGreaterThanFive(str) ? Success(str) : Failure(["Minimum length of 6 is required."]);

const validateTenLong = str => isTenLong(str) ? Success(str) : Failure(["Should be 10 long."]);

/* --------------------------- exports below ---------------------------- */

export const validateUserName = name => validateLongerThanFive(name);

export const validatePhone = phone => Success().concat(validateTenLong(phone)).concat(validateNumeric(phone));//.map(__ => phone);

export const validateEmailAddress = email => isEmailPattern(email) ? Success(email) : Failure(["Not an e-mail address"]);