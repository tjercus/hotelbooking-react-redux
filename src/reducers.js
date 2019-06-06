import { combineReducers } from "redux";

import offersReducer from "./offers/offersReducer";
import cartReducer from "./cart/cartReducer";
import registrationReducer from "./registration/registrationReducer";
import appReducer from "./app/appReducer";

export default combineReducers({
  appReducer, offersReducer, cartReducer, registrationReducer
});
