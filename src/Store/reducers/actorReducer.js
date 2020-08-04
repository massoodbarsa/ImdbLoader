import {
  FETCH_SELECTED_ACTOR,
  FETCH_ACTOR_SUCCESS,
} from "../actions/actionTypes";

const initState = {
  error: "",
  actor: {},
  actorLoading: true,
};

const actorReducer = (state = initState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case FETCH_SELECTED_ACTOR:
      return {
        ...state,
        actor: action.payload,
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
