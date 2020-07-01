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
        "x-rapidapi-key": "b89157ece2mshb4ae62de50f3327p158afdjsn0e6662ffa3cf",
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
    fetch(
      `https://imdb8.p.rapidapi.com/title/get-overview-details?currentCountry=US&tconst=${id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
          "x-rapidapi-key":
            "b89157ece2mshb4ae62de50f3327p158afdjsn0e6662ffa3cf",
        },
      }
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "OVERVIEW_SELECTED_MOVIE", selectedItem: data })
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
            "b89157ece2mshb4ae62de50f3327p158afdjsn0e6662ffa3cf",
        },
      }
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "VIDEO_SELECTED_MOVIE", selectedItem: data })
      )
      .catch((err) => {});
  };
};
