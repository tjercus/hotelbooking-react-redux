import { DEL_ITEM_CMD, ADD_ITEM_CMD } from "./cartConstants";

export const delItemFromCartActionCreator = item => ({
  type: DEL_ITEM_CMD,
  payload: {
    item
  }
});

export const addItemToCartActionCreator = item => ({
  type: ADD_ITEM_CMD,
  payload: {
    item
  }
});
