import { DEL_ITEM_CMD, ADD_ITEM_CMD } from "./cartConstants";

export const delItemAction = item => ({
  type: DEL_ITEM_CMD,
  payload: {
    item
  }
});

export const addItemAction = item => ({
  type: ADD_ITEM_CMD,
  payload: {
    item
  }
});
