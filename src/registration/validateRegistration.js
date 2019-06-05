import {validateEmailAddress, validatePhone, validateUserName} from "../validation";
import Validation from "folktale/validation";

// Folktale versions of algebraic Either.Right and Either.Left
const Success = Validation.Success;

/**
 * Validate a new user's registration
 * @param {User} user
 * @returns {Validation.Success|Validation.Failure}
 */
export const validateRegistration = user =>
  Success()
    .concat(validateUserName(user.name))
    .concat(validateEmailAddress(user.email))
    .concat(validatePhone(user.phone));
