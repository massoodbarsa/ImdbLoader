import React, { Component } from "react";
import "../css/imdb.scss";
import Movies from "./Movies";
import { connect } from "react-redux";
import { loadMovieFromApi } from "../Store/actions/moviesAction";

class Imdb extends Component {
  state = {
    search: "",
  };

  // componentDidMount() {
  //   fetch(`https://imdb8.p.rapidapi.com/title/find?q=breaking bad`, {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "imdb8.p.rapidapi.com",
  //       "x-rapidapi-key": "fe127e3e7cmsh8debc737b522bd7p16be58jsn707dda0c02c1",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) =>
  //       this.setState({
  //         movies: data.results,
  //       })
  //     )
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleClick = () => {
    console.log(this.props);

    this.props.loadMovieFromApi(this.state.search);
  };

  render() {
    const { movies } = this.props;
    return (
      <div className="row">
        <section className="search-area input-field">
          <label>Search</label>
          <input
            type="text"
            className="search-input"
            onChange={this.handleChange}
          />
          <a
            className="btn-floating btn-large waves-effect waves-light cyan lighten-2 "
            onClick={this.handleClick}
          >
            <i className="material-icons">search</i>
          </a>{" "}
        </section>
        <section className="col s12">
          {movies.map((item) => (
            <Movies
              key={item.id}
              id={item.id}
              title={item.title}
              // type={item.titleType}
              // numberOfEpisodes={item.numberOfEpisodes}
              // year={item.year}
              // seriesStartYear={item.seriesStartYear}
              // seriesEndYear={item.seriesStartYear}
              // image={item.image}
            />
          ))}
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
    loadMovieFromApi: (searchedItem) =>
      dispatch(loadMovieFromApi(searchedItem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Imdb);
