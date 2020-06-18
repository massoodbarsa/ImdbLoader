import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/movie.scss";

class Movie extends Component {
  // state = {
  //   id: null,
  //   title: {},
  //   certificates: {},
  //   rating: null,
  //   genres: [],
  //   releaseDate: null,
  //   summary: {},
  //   titleType: null,
  // };
  // componentDidMount() {
  //   let id = this.props.match.params.movie_id;

  //   fetch(
  //     `https://imdb8.p.rapidapi.com/title/get-overview-details?currentCountry=US&tconst=${id}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-host": "imdb8.p.rapidapi.com",
  //         "x-rapidapi-key":
  //           "fe127e3e7cmsh8debc737b522bd7p16be58jsn707dda0c02c1",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) =>
  //       this.setState({
  //         id: data.id,
  //         title: data.title,
  //         certificates: data.certificates,
  //         rating: data.ratings.rating,
  //         genres: data.genres,
  //         releaseDate: data.releaseDate,
  //         summary: data.plotSummary,
  //       })
  //     )

  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  render() {
    // const { title, rating, genres } = this.state;
    const { title } = this.props.movies;

    // const url =
    // title.image !== undefined || null
    //   ? Object.values(title.image).filter((item) => item !== undefined)
    //   : "";

    console.log(title);

    // const gener = genres.map((item) => {
    //   return <li key={item}>{item}</li>;
    // });

    return (
      <div className="row">
       

        <div className="col s12">
          <h3 className="movie-title">{title}</h3>
          {/* <p>{title.titleType}</p>
        <p>{title.seriesStartYear}</p>
        <p>{title.seriesEndYear}</p>
        <p>{title.titleType}</p> */}
          {/* <p>{title.image}</p> */}
          {/* <p>Rating:{rating}</p>
        <div style={{ display: "flex" }}>
          <p>gener</p>
          <ul>{gener}</ul>
        </div>

        <img
          src={url[2]}
          alt=""
          className="movie-image"
        /> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, myProps) => {
  let id = myProps.match.params.movie_id;

  return { movies: state.movie.movies.find((i) => i.id == id) };
};

export default connect(mapStateToProps)(Movie);
