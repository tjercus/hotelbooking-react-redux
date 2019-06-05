import { UPDATE_USER_CMD, REGISTER_USER_CMD } from "./registrationConstants";
import {validateRegistration} from "./validateRegistration";

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
    const newUser = { ...state.user, ...action.payload.data };
    return {
      ...state,
      user: newUser,
      errors: validateRegistration(newUser).matchWith({
        Success: () => [],
        Failure: ({ value }) => value
      })
    };
  }
  if (REGISTER_USER_CMD === action.type) {
    const newUser = { ...state.user, ...action.payload.data };
    console.log("newUser", newUser);
    return {
      ...state,
      user: addUser(newUser),
      errors: validateRegistration(newUser).matchWith({
        Success: () => [],
        Failure: ({ value }) => value
      })
    };
  }
  return state;
};

export default registrationReducer;
