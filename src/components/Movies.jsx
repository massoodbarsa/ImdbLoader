import React from "react";
import "../css/movies.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteMovie,
  getOverview,
  getVideo,
} from "../Store/actions/moviesAction";
import { Grid, LinearProgress, Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faTrash } from "@fortawesome/free-solid-svg-icons";

function Movies(props) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteMovie(props.id));
  };

  const handlSelectMovie = () => {
    dispatch(getOverview(props.id.slice(7)));
    dispatch(getVideo(props.id.slice(7)));
  };

  const url =
    props.image !== undefined || null
      ? Object.values(props.image).filter((item) => item !== undefined)
      : "";

  if (typeof props.title === "undefined") return null;

  return (
    <Grid item xs={12}>
      <li className="movie-section ">
        <Grid key={props.id} item xs={6}>
          <h2 className="movies-title">{props.title}</h2>

          <div className="movie-item">
            <h4>Type :</h4>
            <p>{props.type || "..."}</p>
          </div>

          <div className="movie-item">
            <h4>Number of episodes :</h4>
            <p>{props.numberOfEpisodes || "..."}</p>
          </div>

          <div className="movie-item">
            <h4>Year :</h4>
            <p>{props.year || "..."}</p>
          </div>
        </Grid>
        <Grid className="movie_button_area" item xs={2}>
          <Link to={"/" + props.id.slice(7)} onClick={handlSelectMovie}>
            <Button color="primary" variant="contained">
              <FontAwesomeIcon icon={faForward} size="2x" color="#ffffff" />
            </Button>
          </Link>
          <a onClick={handleDelete}>
            <Button color="secondary" variant="contained">
              <FontAwesomeIcon icon={faTrash} size="2x" color="#ffffff" />
            </Button>
          </a>
        </Grid>
        <Grid className="movie-image-container " item xs={4}>
          <img src={url[2]} alt="" className="movie-image" />
        </Grid>
      </li>
    </Grid>
  );
}

export default Movies;
