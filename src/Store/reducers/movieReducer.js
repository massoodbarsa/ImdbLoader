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
} from "../actions/actionTypes";

const initState = {
  loading: true,
  error: "",
  movies: [],
  movieOverview: [],
  movieVideo: [],
};

const movieReducer = (state = initState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case FETCH_SEARCHED_MOVIE:
      return {
        ...state,
        movies: action.searchedItem,
      };

    case FETCH_SEARCHED_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case FETCH_SEARCHED_MOVIE_FAILURE:
      return {
        ...state,
        loading: true,
        error:action.payload
      }

    case "DELETE_MOVIE":
      if (action.type === "DELETE_MOVIE") {
        let newMovies = state.movies.filter((item) => {
          return action.id !== item.id;
        });
        return {
          ...state,
          movies: newMovies,
        };
      }
    case "OVERVIEW_SELECTED_MOVIE":
      return {
        ...state,
        movieOverview: action.selectedItem,
      };
    case "VIDEO_SELECTED_MOVIE":
      return {
        ...state,
        movieVideo: action.selectedItem,
      };
  }
  return state;
};

export default movieReducer;
