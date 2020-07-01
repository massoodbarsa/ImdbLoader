import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/movie.scss";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import Actor from "./Actor";
import { getOverview } from "../Store/actions/moviesAction";

class Movie extends Component {
  render() {
    const {
      title,
      image,
      titleType,
      seriesStartYear,
      seriesEndYear,
      runningTimeInMinutes,
      principals,
    } = this.props.movies;

    const {
      ratings,
      genres,
      releaseDate,
      plotSummary,
    } = this.props.movieOverview;

    const url =
      image !== undefined || null
        ? Object.values(image).filter((item) => item !== undefined)
        : "";

    const rating =
      ratings !== undefined || null
        ? Object.values(ratings).filter((item) => item !== undefined)
        : "";

    const summary =
      plotSummary !== undefined || null
        ? Object.values(plotSummary).filter((item) => item !== undefined)
        : "";

    // console.log(this.props.movieOverview);
    // console.log(this.props.movies.title);
    // console.log(this.props.movieVideo.resource.title);

    const gener =
      genres &&
      genres.map((item) => {
        return <li key={item}>{item}</li>;
      });

    const video =
      this.props.movieVideo.videos &&
      this.props.movieVideo.videos.map((item) => {
        item;
        // return <li key={item.contentType}>{item}</li>;
      });

    return (
      <Grid className="" container>
        <Grid item xs={8} className="movie_overview">
          <Typography variant="h3" id="movie-title">
            {title}
          </Typography>
          <form>
            <Card className="movie-contents">
              <Grid item xs={6}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    MovieType
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="movie-results"
                  >
                    {titleType}
                    <br />
                  </Typography>

                  <Typography color="textSecondary" gutterBottom>
                    Start year
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="movie-results"
                  >
                    {seriesStartYear || "..."}
                    <br />
                  </Typography>

                  <Typography color="textSecondary" gutterBottom>
                    End year
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="movie-results"
                  >
                    {seriesEndYear || "..."}
                    <br />
                  </Typography>

                  <Typography color="textSecondary" gutterBottom>
                    Realeas date
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="movie-results"
                  >
                    {releaseDate || "..."}
                    <br />
                  </Typography>

                  <Typography color="textSecondary" gutterBottom>
                    Summary
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="movie-results"
                    id="summary"
                  >
                    {summary[2] || "..."}
                    <br />
                  </Typography>
                </CardContent>
              </Grid>

              <Grid className="" item xs={6}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Rating
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="movie-results"
                  >
                    {rating[1] || "..."}
                    <br />
                  </Typography>

                  <Typography color="textSecondary" gutterBottom>
                    Duration
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="movie-results"
                  >
                    {runningTimeInMinutes}

                    <br />
                  </Typography>

                  <Typography color="textSecondary" gutterBottom>
                    movieType
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="movie-results"
                  >
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>

                </CardContent>
              </Grid>
            </Card>
          </form>
        </Grid>
        <Grid className="movie_image_container" item xs={4}>
          <img src={url[2]} alt="" className="movie-image" />
          <Actor actors={principals} />

        </Grid>
        <Grid item xs={12}>
          <iframe
            src="https://www.imdb.com/video/imdb/vi2628367897/imdb/embed?autoplay=false&width=1000"
            id="movie_trailer"
          ></iframe>
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
    movieVideo: state.movie.movieVideo,
  };
};

export default connect(mapStateToProps)(Movie);
