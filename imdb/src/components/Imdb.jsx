import React, { Component } from "react";
import "../css/imdb.scss";
import Movies from "./Movies";
import { connect } from "react-redux";
import { loadMovieFromApi } from "../Store/actions/moviesAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input, Button, Card,Typography } from "@material-ui/core";

class Imdb extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleClick = () => {
    this.props.loadMovieFromApi(this.state.search);
  };

  loadPage = () => {
    const { movies } = this.props;

    if (movies) {
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
          >
            There is no result for your search 
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
            classes="input"
          />
          <a
            className="btn-floating btn-large waves-effect waves-light cyan lighten-2 "
            onClick={this.handleClick}
          >
            <Button color="primary">
              <FontAwesomeIcon icon={faSearch} size="2x" color="#286b92" />
            </Button>
          </a>
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
    loadMovieFromApi: (searchedItem) =>
      dispatch(loadMovieFromApi(searchedItem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Imdb);
