import { UPDATE_USER_CMD, REGISTER_USER_CMD } from "./registrationConstants";
import UsersRepository from "../users/UsersRepository";

const defaultState = {
  user: {
    name: null,
    gender: null,
    province: null,
    email: null,
    phone: null,
    creditcard: null
  },
  errors: []
};

const addUser = user => {
  console.log("saving the yser to disk ...");
  // UsersRepository.addUser(user);
  return user;
};

const registrationReducer = (state = defaultState, action) =>
  UPDATE_USER_CMD === action.type
    ? { user: { ...state.user, ...action.payload.data } } :
  REGISTER_USER_CMD ? addUser(state.user) : state;

export default registrationReducer;
