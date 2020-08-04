import {
  FETCH_SELECTED_ACTOR,
  FETCH_ACTOR_SUCCESS,
} from "../actions/actionTypes";

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
  }
  return state;
};

export default actorReducer;
