import { ACTIVATE_SCENE_CMD } from "./appConstants";

export const activateSceneActionCreator = activeScene => ({
  type: ACTIVATE_SCENE_CMD,
  payload: {
    activeScene
  }
});
