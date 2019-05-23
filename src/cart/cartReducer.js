
import { ADD_ITEM_CMD, DEL_ITEM_CMD } from "./cartConstants";

const defaultState = {
  items: [],
  total: 0.0
};

const cartReducer = (state = defaultState, action) => {
  if (action.type === ADD_ITEM_CMD) {
    const updatedItems = state.items.concat(action.payload.item);
    // TODO dynamically add id

    // calculate new total
    const newTotal = state.items.reduce((acc, item) => acc + item.price, 0.0);
    return { ...state, items: updatedItems, total: newTotal };
  }
  if (action.type === DEL_ITEM_CMD) {
  }
  return state;
};

export default cartReducer;
