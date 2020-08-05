import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/movie.scss";
import { Grid, Typography } from "@material-ui/core";
import Actors from "./Actors";
import { CircularProgress } from "@material-ui/core";
import {
  getOverview,
  getVideo,
  getMovieCast,
} from "../Store/actions/moviesAction";

function Movie(props) {
  let id = props.match.params.movie_id;

  const dispatch = useDispatch();
  const movieOverview = useSelector((state) => state.movie.movieOverview);
  const movieVideo = useSelector((state) => state.movie.movieVideo);

  useEffect(() => {
    dispatch(getOverview(id));
    dispatch(getVideo(id));
    dispatch(getMovieCast(id));
  }, []);

  const { title, ratings, genres, releaseDate, plotSummary } = movieOverview;

  const resource = movieVideo.resource;

  let trailerId = [];
  if (resource) {
    const trailers =
      resource.videos &&
      resource.videos.filter((item) => {
        if (
          item.primaryTitle.id === resource.id &&
          item.audioLanguage === "eng"
        ) {
          return (item.contentType = "Trailer");
        }
      });

    trailerId = trailers && trailers.map((item) => item.id.slice(9));
  }

  const gener =
    genres &&
    genres.map((item) => {
      return <span key={item}>{item}</span>;
    });

  return (
    <Grid container className="movie_container">
      <Grid className="movie_image_container" item xs={12}>
        <Typography variant="h3" id="movie-title">
          {title ? title.title : ""}
        </Typography>
        <img
          src={title ? title.image.url : null}
          alt=""
          className="movie-image"
        />
      </Grid>
      <Grid item xs={12}>
        <h2>Overview</h2>
      </Grid>

      <Grid item xs={3}>
        <Typography color="textSecondary" gutterBottom>
          MovieType
        </Typography>
        <Typography variant="body2" component="p" className="movie-results">
          {title ? title.titleType : "..."}
          <br />
        </Typography>

        <Typography color="textSecondary" gutterBottom>
          Year
        </Typography>
        <Typography variant="body2" component="p" className="movie-results">
          {title ? title.year : "..."}
          <br />
        </Typography>

        <Typography color="textSecondary" gutterBottom>
          Realeas date
        </Typography>
        <Typography variant="body2" component="p" className="movie-results">
          {releaseDate || "..."}
          <br />
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography color="textSecondary" gutterBottom>
          Rating
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className="movie-results"
          style={{ color: "red", fontWeight: "bold" }}
        >
          {ratings ? ratings.rating : "..."}
          <br />
        </Typography>

        <Typography color="textSecondary" gutterBottom>
          Duration
        </Typography>
        <Typography variant="body2" component="p" className="movie-results">
          {title ? title.runningTimeInMinutes : "..."} min
          <br />
        </Typography>

        <Typography color="textSecondary" gutterBottom>
          Gener
        </Typography>
        <Typography variant="body2" component="p" className="movie-results">
          {gener}
          <br />
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography color="textSecondary" gutterBottom>
          Summary
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className="movie-results"
          id="summary"
        >
          {plotSummary ? (
            plotSummary.text
          ) : (
            <CircularProgress color="secondary" />
          )}
          <br />
        </Typography>
      </Grid>
      <Grid className="" item xs={8}>
        <Actors />
      </Grid>
      <Grid item xs={4}>
        <iframe
          src={` https://www.imdb.com/video/imdb/${
            trailerId ? trailerId[0] : null
          }/imdb/embed?autoplay=false&width=1000`}
          id="movie_trailer"
        ></iframe>
      </Grid>
    </Grid>
  );
}

export default Movie;
