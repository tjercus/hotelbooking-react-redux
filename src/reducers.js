import { combineReducers } from "redux";

import offersReducer from "./offers/offersReducer";
import cartReducer from "./cart/cartReducer";

export default combineReducers({
  offersReducer, cartReducer
});
