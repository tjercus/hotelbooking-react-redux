import { combineReducers } from "redux";

import offersReducer from "./offers/offersReducer";
import cartReducer from "./cart/cartReducer";
import registrationReducer from "./registration/registrationReducer";

export default combineReducers({
  offersReducer, cartReducer, registrationReducer
});
