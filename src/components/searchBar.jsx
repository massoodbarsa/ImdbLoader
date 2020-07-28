import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { Input, Button } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import { connect } from "react-redux";
import { fetchMovieFromApi } from "../Store/actions/moviesAction";

class searchBar extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      search: e.target.value,
    });
  };

  handleClick = () => {
    this.props.fetchMovieFromApi(this.state.search);
  };

  pageContentLength = () => {
    const valiedMovies = this.props.movies.filter(
      (item) => item.title !== undefined
    );

    return valiedMovies.length;
  };

  render() {
    return (
      <div>
        <section className="search-area">
          <label>Search</label>
          <Input
            type="text"
            className="search-input"
            onChange={this.handleChange}
            color="primary"
          />
          <a
            className="btn-floating btn-large waves-effect waves-light cyan lighten-2 "
            onClick={this.handleClick}
          >
            <Button color="primary">
              <FontAwesomeIcon icon={faSearch} size="2x" color="#286b92" />
            </Button>
          </a>
          <Badge
            color="secondary"
            badgeContent={this.pageContentLength()}
            onClick={this.pageContentLength}
          >
            <FontAwesomeIcon icon={faFileDownload} size="2x" color="#286b92" />
          </Badge>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { movies: state.movie.movies };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieFromApi: (searchedItem) =>
      dispatch(fetchMovieFromApi(searchedItem)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(searchBar);
