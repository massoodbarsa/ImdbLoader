import movieReducer from "./movieReducer";
import actorReducer from "./actorReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  movie: movieReducer,
  actor:actorReducer
});
export default rootReducer;
