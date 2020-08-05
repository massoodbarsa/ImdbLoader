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
	"x-rapidapi-key": "7b84827559mshe657f27b17ec84dp13e4c3jsn1ef80462b1b4",
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
