import { UPDATE_USER_CMD, REGISTER_USER_CMD } from "./registrationConstants";

export const updateUserActionCreator = data =>  ({
  type: UPDATE_USER_CMD,
  payload: {
    data
  }
});

export const registerUserActionCreater = user => ({
  type: REGISTER_USER_CMD,
  payload: {
    user
  }
});

