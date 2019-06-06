import { curry } from "ramda";
import Validation from "folktale/validation";

// Folktale versions of algebraic Either.Right and Either.Left
const { Success, Failure } = Validation;

const isGreaterThan = curry((len, a) => a > len);

const isGreaterThanFive = isGreaterThan(5);

const isOfEqualLength = curry((len, a) => a === len);

const isTenLong = isOfEqualLength(10);

const isEmailPattern = str => /[a-z@.]/.test(str);

const isNumeric = str => /[0-9]/.test(str);

const validateNumeric = a =>
  isNumeric(a) ? Success(a) : Failure([`'${a}' is not numeric`]);

const validateLongerThanFive = str =>
  isGreaterThanFive(str)
    ? Success(str)
    : Failure([`Minimum length of 6 is required for '${str}'`]);

const validateTenLong = str =>
  isTenLong(str) ? Success(str) : Failure([`'${str}' should be 10 long.`]);

/* --------------------------- exports below ---------------------------- */

export const validateUserName = name => validateLongerThanFive(name);

export const validatePhone = phone =>
  Success()
    .concat(validateTenLong(phone))
    .concat(validateNumeric(phone));

export const validateEmailAddress = email =>
  isEmailPattern(email)
    ? Success(email)
    : Failure([`'${email}' is not an e-mail address`]);
