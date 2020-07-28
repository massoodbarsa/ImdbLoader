import React, { Component } from "react";
import "../css/imdb.scss";
import Movies from "./Movies";
import { connect } from "react-redux";
import { fetchMovieFromApi } from "../Store/actions/moviesAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { Input, Button, Card, Typography } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
class Imdb extends Component {
  state = {
    search: "",
    pageMovieLength: "",
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleClick = () => {
    this.props.fetchMovieFromApi(this.state.search);
  };

  pageContentLength = () => {
    const length = this.props.movies.filter((item) => item.title !== undefined);

    return length.length;
  };

  loadPage = () => {
    const { movies } = this.props;

    if (movies.length !== 0 || movies === undefined) {
      return (
        <section className="">
          {movies.map((item) => (
            <Movies
              key={item.id}
              id={item.id}
              title={item.title}
              type={item.titleType}
              numberOfEpisodes={item.numberOfEpisodes}
              year={item.year}
              seriesStartYear={item.seriesStartYear}
              seriesEndYear={item.seriesStartYear}
              image={item.image}
            />
          ))}
        </section>
      );
    } else
      return (
        <Card>
          <Typography
            color="textSecondary"
            variant="h5"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            Search your favorite movie or series
          </Typography>
        </Card>
      );
  };

  render() {
    return (
      <div className="">
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

        {this.loadPage()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Imdb);
