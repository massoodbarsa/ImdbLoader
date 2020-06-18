import React, { Component } from "react";
import "../css/imdb.scss";
import Movies from "./Movies";
import { connect } from "react-redux";

class Imdb extends Component {
  // state = {
  //   movies: [],
  //   search: "",
  // };

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

  onChange=(e)=> {
    console.log(e.target.value);
    debugger
  }

  render() {
    console.log(this.props);

    return (
      <div className='row'>
        <section className="search-area input-field">
          <label >Search</label>
          <input
            type="text"
            className="search-input"
            onChange={this.onChange}
          />
        </section>
        <section className="col s12">
          {this.props.movies.map((item) => (
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



export default connect(mapStateToProps)(Imdb);
