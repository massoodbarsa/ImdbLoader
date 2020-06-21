import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/movie.scss";
import { Grid } from "@material-ui/core";

class Movie extends Component {
  render() {
    // const {
    //   title,
    //   image,
    //   titleType,
    //   seriesStartYear,
    //   seriesEndYear,
    // } = this.props.movies;

    // const {
    //   ratings,
    //   genres,
    //   releaseDate,
    //   plotSummary,
    // } = this.props.movieOverview;

    // const url =
    //   image !== undefined || null
    //     ? Object.values(image).filter((item) => item !== undefined)
    //     : "";

    // const rating =
    //   ratings !== undefined || null
    //     ? Object.values(ratings).filter((item) => item !== undefined)
    //     : "";

    // const summary =
    //   plotSummary !== undefined || null
    //     ? Object.values(plotSummary).filter((item) => item !== undefined)
    //     : "";

    // console.log(this.props.movieOverview);
    // console.log(summary);

    // const gener =
    //   genres &&
    //   genres.map((item) => {
    //     return <li key={item}>{item}</li>;
    //   });

    return (
      <Grid className="" container>
        <Grid item xs={8} className="movie_overview">
          <form>
            <ul>hier content</ul>
          </form>
          {/* <h3 className="movie-title">{title}</h3> */}
          {/* <p>{titleType}</p> */}
          {/* <p>{seriesStartYear}</p> */}
          {/* <p>{seriesEndYear}</p> */}
          {/* <p>Rating:{rating[1]}</p> */}
          {/* <p>certificates:{certificates}</p> */}
          {/* <p>releaseDate:{releaseDate}</p> */}
          {/* <p>summary:{summary[2]}</p> */}
          {/* <div>
            <p>gener</p>
            <ul>{gener}</ul>
          </div> */}
        </Grid>
        <Grid className="movie_image_container" item xs={4}>
          {" "}
          {/* <img src={url[2]} alt="" className="movie-image" /> */}
          <img alt="" className="movie-image" />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state, myProps) => {
  let id = myProps.match.params.movie_id;

  return {
    movies: state.movie.movies.find((i) => i.id == `/title/${id}/`),

    movieOverview: state.movie.movieOverview,
  };
};

export default connect(mapStateToProps)(Movie);
