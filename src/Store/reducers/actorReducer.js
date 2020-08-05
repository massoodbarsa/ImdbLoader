import {
  FETCH_SELECTED_ACTOR,
  FETCH_ACTOR_SUCCESS,
  CLEAN_PERV_ACTORS
} from "../actions/actionTypes";

let actors = new Set()

const initState = {
  error: "",
  actors:[],
  actorLoading: true,
};

const actorReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_SELECTED_ACTOR:
      return {
        ...state,
        actors: [...state.actors,action.payload],
      };
    case FETCH_ACTOR_SUCCESS:
      return {
        ...state,
        ActorLoading: false,
      };
      case CLEAN_PERV_ACTORS:
        return {
          ...state,
          actors: [],
        };
  }
  return state;
};

export default actorReducer;
