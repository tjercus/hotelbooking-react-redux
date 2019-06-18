import { ADD_ITEM_CMD, DEL_ITEM_CMD } from "./cartConstants";
import { curry, filter, pluck, sum, concat } from "ramda";

const getPrices = pluck("price");
const sumOfItems = items => sum(getPrices(items));

const randomId = () => Math.floor(Math.random() * 1000000 + 1);
const hasNotId = curry((id, item) => item.id !== id);

const defaultState = {
  items: [],
  total: 0.0
};

const cartReducer = (state = defaultState, action) => {
  if (action.type === ADD_ITEM_CMD) {
    // dynamically change from offer to item id
    const updatedItems = concat(state.items, [{
      ...action.payload.item,
      id: randomId()
    }]);
    // calculate new total
    return { ...state, items: updatedItems, total: sumOfItems(updatedItems) };
  }
  if (action.type === DEL_ITEM_CMD) {
    const idToDelete = action.payload.item.id;
    const byNotHavingTheId = hasNotId(idToDelete);
    const updatedItems = filter(byNotHavingTheId, state.items);
    return { ...state, items: updatedItems, total: sumOfItems(updatedItems) };
  }
  return state;
};

export default cartReducer;
