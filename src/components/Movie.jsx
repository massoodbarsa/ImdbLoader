import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/movie.scss";
import { Grid, Typography } from "@material-ui/core";
import Actors from "./Actors";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  getOverview,
  getVideo,
  getMovieCast,
} from "../Store/actions/moviesAction";

function Movie(props) {
  let id = props.match.params.movie_id;

  // const movies = useSelector((state) =>
  //   state.movie.movies.find((i) => i.id == `/title/${id}/`)
  // );

  const dispatch = useDispatch();

  // const [loading, setLoading] = useState({
  //   loading: true,
  // });

  // const movieName = title ? title.title : "";

  useEffect(() => {
    dispatch(getOverview(id));
    dispatch(getVideo(id));
    dispatch(getMovieCast(id));
  }, []);

  const movieOverview = useSelector((state) => state.movie.movieOverview);
  const movieVideo = useSelector((state) => state.movie.movieVideo);
  const movieCast = useSelector((state) => state.movie.movieCast).slice(0,3);

console.log(movieCast);

  const {
    runningTimeInMinutes,
    title,
    ratings,
    genres,
    releaseDate,
    plotSummary,
  } = movieOverview;

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

  // const {
  // title,
  // image,
  // titleType,
  // seriesStartYear,
  // seriesEndYear,
  // runningTimeInMinutes,
  //   principals,
  // } = movies;

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
          Start year
        </Typography>
        <Typography variant="body2" component="p" className="movie-results">
          {/* {seriesStartYear || "..."} */}
          <br />
        </Typography>

        <Typography color="textSecondary" gutterBottom>
          End year
        </Typography>
        <Typography variant="body2" component="p" className="movie-results">
          {/* {seriesEndYear || "..."} */}
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
          {runningTimeInMinutes} min
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
          {plotSummary ? plotSummary.text : <CircularProgress />}
          <br />
        </Typography>
      </Grid>
      <Grid className="" item xs={6}>
        <Actors actors={movieCast} />
      </Grid>
      <Grid item xs={6}>
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
