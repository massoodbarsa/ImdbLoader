import {
  FETCH_SEARCHED_MOVIE,
  FETCH_SEARCHED_MOVIE_SUCCESS,
  FETCH_SEARCHED_MOVIE_FAILURE,
  OVERVIEW_SELECTED_MOVIE,
  OVERVIEW_SELECTED_SUCCESS,
  OVERVIEW_SELECTED_FAILURE,
  VIDEO_SELECTED_MOVIE,
  VIDEO_SELECTED_SUCCESS,
  VIDEO_SELECTED_FAILURE,
  FETCH_SELECTED_ACTOR,
  FETCH_ACTOR_SUCCESS,
} from "./actionTypes";

const apiKey = {
  "x-rapidapi-host": "imdb8.p.rapidapi.com",
  "x-rapidapi-key": "42a48a5d8emshccccc5aa232416fp1039dfjsna66bdbb8b777"
};

export const fetchActor = (actor) => {
  return (dispatch) => {
    fetch(`https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${actor}`, {
      method: "GET",
      headers: apiKey,
    })
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