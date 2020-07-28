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
} from "./actionTypes";

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
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "c676ed0ecamsh8088e625996de6ep18f297jsn83839b2dedc3",
        useQueryString: true,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: FETCH_SEARCHED_MOVIE, searchedItem: data.results })
      ).then(dispatch(fetchMovieSuccess()))
      .catch(() => {dispatch(fetchMovieFailure())});
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
        headers: {
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key":
            "c676ed0ecamsh8088e625996de6ep18f297jsn83839b2dedc3",
        },
      }
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: OVERVIEW_SELECTED_MOVIE, selectedItem: data })
      )
      .catch((err) => {});
  };
};
export const getVideo = (id) => {
  return (dispatch) => {
    fetch(
      `https://imdb8.p.rapidapi.com/title/get-videos?limit=25&region=US&tconst=${id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key":
            "c676ed0ecamsh8088e625996de6ep18f297jsn83839b2dedc3",
        },
      }
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: VIDEO_SELECTED_MOVIE, selectedItem: data })
      )
      .catch((err) => {});
  };
};
