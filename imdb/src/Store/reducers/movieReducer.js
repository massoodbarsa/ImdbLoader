const initState = {
  movies: [],
  movieOverview: [],
  movieVideo:[]
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_SEARCHED_MOVIE":
      return {
        ...state,
        movies: action.searchedItem,
      };

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
      case 'VIDEO_SELECTED_MOVIE':
      return {
        ...state,
        movieVideo: action.selectedItem,
      };
  }
  return state;
};

export default movieReducer;
