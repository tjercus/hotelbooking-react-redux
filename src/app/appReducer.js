
const defaultState = {
  activeScene: "offers"
};

const appReducer = (state = defaultState, action) =>
  "ACTIVATE_SCENE_CMD" === action.type
    ? { ...state, activeScene: action.payload.activeScene }
    : state;

export default appReducer;
