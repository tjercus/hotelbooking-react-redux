import { map } from "ramda";

import { UPDATE_USER_CMD, REGISTER_USER_CMD } from "./registrationConstants";
// import UsersRepository from "../users/UsersRepository";
import { validationRules } from "./validationRules";
import { displayError, getErrors } from "../validation";

const defaultState = {
  user: {
    name: "",
    gender: "",
    province: "",
    email: "",
    phone: 0,
    creditcard: 0
  },
  errors: []
};

const addUser = user => {
  console.log("saving the user to disk ...");
  // UsersRepository.addUser(user);
  return user;
};

// TODO re-write to functional style without if-else
const registrationReducer = (state = defaultState, action) => {
  if (UPDATE_USER_CMD === action.type) {
    console.log("UPDATE_USER_CMD", action.payload);
    // console.log(map(displayError, getErrors(action.payload.data, validationRules)));
    return {
      ...state,
      user: { ...state.user, ...action.payload.data },
      errors: getErrors({ ...state.user, ...action.payload.data }, validationRules)
    };
  }
  if (REGISTER_USER_CMD === action.type) {
    return {
      ...state,
      user: addUser(state.user),
      errors: getErrors({ ...state.user, ...action.payload.data }, validationRules)
    };
  }
  return state;
};

export default registrationReducer;
