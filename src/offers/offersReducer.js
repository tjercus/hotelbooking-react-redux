const ADD_OFFER_CMD = "ADD_OFFER_CMD";

const defaultState = {
  offers: [
    { id: 1, name: "Hotel New York", price: 34.95 },
    { id: 2, name: "Hostel Hospitable Amsterdam", price: 12.95 }
  ]
};

const offersReducer = (state = defaultState, action) => {
  console.log("offersReducer", state);
  if (ADD_OFFER_CMD === action.type) {
    return { ...state, offers: [...state.offers, action.payload.offer] };
  }
  return state;
};

export default offersReducer;
