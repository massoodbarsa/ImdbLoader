import {
  FETCH_SEARCHED_MOVIE,
  OVERVIEW_SELECTED_MOVIE,
  VIDEO_SELECTED_MOVIE,
} from "./actionTypes";

export const deleteMovie = (id) => {
  return {
    type: "DELETE_MOVIE",
    id,
  };
};

export const fetchMovieFromApi = (searchedItem) => {
  return (dispatch, getState) => {
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
      )
      .catch((err) => {});
  };
};
export const getOverview = (id) => {
  return (dispatch, getState) => {
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
  return (dispatch, getState) => {
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
