const initState = {
  movies: [
    { id: 1, title: "breaking bad" },
    { id: 2, title: "prisonbreak" },
    { id: 3, title: "interstellar" },
    { id: 4, title: "geladiator" },
  ],
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_SEARCHED_MOVIE":
      console.log(typeof action.searchedItem);

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
