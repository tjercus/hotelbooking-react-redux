
const ADD_OFFER_CMD = "ADD_OFFER_CMD";

const defaultState = {
  offers: []
};

const offersReducer = (state = defaultState, action) => {
  if (ADD_OFFER_CMD === action.type) {
    return { ...state, offers: [...state.offers, action.payload.offer] }
  }
  return state;
};

export default offersReducer;
