import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { Input, Button } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import { connect } from "react-redux";
import { fetchMovieFromApi } from "../Store/actions/moviesAction";
import { Link } from "react-router-dom";

function searchBar(props) {
  console.log(props);
  const [search, setSearch] = useState({
    searchItem: "",
  });

  const handleChange = (e) => {
    setSearch({
      searchItem: e.target.value,
    });
  };

  const handleClick = () => {
    props.fetchMovieFromApi(search.searchItem);
  };

  const onKeyPressed = (e) => {
    e.key === "Enter" ? props.fetchMovieFromApi(search.searchItem) : null;
  };

  const pageContentLength = () => {
    const valiedMovies = props.movies
      ? props.movies.filter((item) => item.title !== undefined)
      : [];

    return valiedMovies.length;
  };

  return (
    <div>
      <section className="search-area">
        <label>Search</label>
        <Input
          type="text"
          className="search-input"
          onChange={handleChange}
          color="primary"
          onKeyDown={(e) => onKeyPressed(e)}
        />
        <Link
          className="btn-floating btn-large waves-effect waves-light cyan lighten-2 "
          onClick={handleClick}
          to="/"
        >
          <Button color="primary">
            <FontAwesomeIcon icon={faSearch} size="2x" color="#286b92" />
          </Button>
        </Link>

        <Link to="/">
          <Badge color="secondary" badgeContent={pageContentLength()}>
            <FontAwesomeIcon icon={faFileDownload} size="2x" color="#286b92" />
          </Badge>
        </Link>
      </section>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { movies: state.movie.movies, loading: state.movie.loading };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieFromApi: (searchedItem) =>
      dispatch(fetchMovieFromApi(searchedItem)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(searchBar);
