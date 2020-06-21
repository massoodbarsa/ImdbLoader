export const deleteMovie = (id) => {
  return {
    type: "DELETE_MOVIE",
    id,
  };
};

export const loadMovieFromApi = (searchedItem) => {
  return (dispatch, getState) => {
    fetch(`https://imdb8.p.rapidapi.com/title/find?q=${searchedItem}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "fe127e3e7cmsh8debc737b522bd7p16be58jsn707dda0c02c1",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "LOAD_SEARCHED_MOVIE", searchedItem: data.results })
      )
      .catch((err) => {});


  };
};
export const getOverview = (id) => {
  return (dispatch, getState) => {
    fetch(`https://imdb8.p.rapidapi.com/title/get-overview-details?currentCountry=US&tconst=${id}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "fe127e3e7cmsh8debc737b522bd7p16be58jsn707dda0c02c1",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "OVERVIEW_SELECTED_MOVIE", selectedItem: data })
      )
      .catch((err) => {});


  };
};
getOverview


// fetch(
//   `https://imdb8.p.rapidapi.com/title/get-overview-details?currentCountry=US&tconst=${searchedItem}`,
//   {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "imdb8.p.rapidapi.com",
//       "x-rapidapi-key":
//         "fe127e3e7cmsh8debc737b522bd7p16be58jsn707dda0c02c1",
//     },
//   }
// )
//   .then((response) => response.json())
//   .then((data) =>
//     dispatch({ type: "LOAD_SEARCHED_MOVIE", searchedItem: data.results })
//   )
//   .catch((err) => {});
