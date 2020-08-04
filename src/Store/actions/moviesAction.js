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
  FETCH_MOVIE_CAST
} from "./actionTypes";

const apiKey = {
  "x-rapidapi-host": "imdb8.p.rapidapi.com",
  "x-rapidapi-key": "42a48a5d8emshccccc5aa232416fp1039dfjsna66bdbb8b777"
};
export const deleteMovie = (id) => {
  return {
    type: "DELETE_MOVIE",
    id,
  };
};

export const fetchMovieFromApi = (searchedItem) => {
  return (dispatch) => {
    fetch(`https://imdb8.p.rapidapi.com/title/find?q=${searchedItem}`, {
      method: "GET",
      headers: apiKey,
    })
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: FETCH_SEARCHED_MOVIE, searchedItem: data.results })
      )
      .catch((err) => {});
  };
};

const fetchMovieSuccess = () => {
  return {
    type: FETCH_SEARCHED_MOVIE_SUCCESS,
  };
};

const fetchMovieFailure = (error) => {
  return {
    type: FETCH_SEARCHED_MOVIE_FAILURE,
    payload: error,
  };
};

export const getOverview = (id) => {
  return (dispatch) => {
    fetch(
      `https://imdb8.p.rapidapi.com/title/get-overview-details?currentCountry=US&tconst=${id}`,
      {
        method: "GET",
        headers: apiKey,
      }
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: OVERVIEW_SELECTED_MOVIE, selectedItem: data })
      )
      .then(dispatch(fetchMovieSuccess()))

      .catch(() => {
        dispatch(fetchMovieFailure());
      });
  };
};
export const getVideo = (id) => {
  return (dispatch) => {
    fetch(
      `https://imdb8.p.rapidapi.com/title/get-videos?limit=25&region=US&tconst=${id}`,
      {
        method: "GET",
        headers: apiKey,
      }
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: VIDEO_SELECTED_MOVIE, selectedItem: data })
      )
      .catch((err) => {});
  };
};

export const getMovieCast = (id) => {
  return (dispatch) => {
    fetch(`https://imdb8.p.rapidapi.com/title/get-top-cast?tconst=${id}`, {
      method: "GET",
      headers: apiKey,
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: FETCH_MOVIE_CAST, payload: data }))
      .catch((err) => {});
  };
};
