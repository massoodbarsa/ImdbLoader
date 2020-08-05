import {
  FETCH_SELECTED_ACTOR,
  FETCH_ACTOR_SUCCESS,
  CLEAN_PERV_ACTORS,
} from "./actionTypes";

const apiKey = {
  "x-rapidapi-host": "imdb8.p.rapidapi.com",
  "x-rapidapi-key": "7b84827559mshe657f27b17ec84dp13e4c3jsn1ef80462b1b4",
};

export const fetchActor = (actor) => {
  return (dispatch) => {
    fetch(`https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${actor}`, {
      method: "GET",
      headers: apiKey,
    })
      .then(dispatch(cleanPervActores()))
      .then((response) => response.json())
      .then((data) => dispatch({ type: FETCH_SELECTED_ACTOR, payload: data }))
      .then(dispatch(fetchActorSuccess()))
      .catch((err) => {});
  };
};

const fetchActorSuccess = () => {
  return {
    type: FETCH_ACTOR_SUCCESS,
  };
};

const cleanPervActores = () => {
  return {
    type: CLEAN_PERV_ACTORS,
  };
};
