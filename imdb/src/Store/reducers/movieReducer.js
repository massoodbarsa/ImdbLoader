const initState = {
  movies: [],
};

const movieReducer = (state = initState, action) => {
  console.log(state);
  
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
  }
  return state;
};

export default movieReducer;
