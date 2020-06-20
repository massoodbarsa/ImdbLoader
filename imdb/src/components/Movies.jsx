import React from "react";
import "../css/movies.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteMovie } from "../Store/actions/moviesAction";

function Movies(props) {
  const url =
    props.image !== undefined || null
      ? Object.values(props.image).filter((item) => item !== undefined)
      : "";

  const handleClick = () => {
    props.deleteMovie(props.id);
  };

  if (typeof props.title === "undefined") return null;

  return (
    <li className="movie-section row">
      <div key={props.id} className="col s8">
        <h4 className="movie-title">{props.title}</h4>

        <div className="movie-item">
          <h6>Type :</h6>
          <p>{props.type || "..."}</p>
        </div>

        <div className="movie-item">
          <h6>Number of episodes :</h6>
          <p>{props.numberOfEpisodes || "..."}</p>
        </div>

        <div className="movie-item">
          <h6>Year :</h6>
          <p>{props.year || "..."}</p>
        </div>

        <div className="movie-item">
          <h6>Start Year :</h6>
          <p>{props.seriesStartYear || "..."}</p>
        </div>

        <div className="movie-item">
          <h6>End Year :</h6>
          <p>{props.seriesEndYear || "..."}</p>
        </div>
      </div>
      <div className="col s3 movie_button_area">
        <Link
          to={"/" + props.id.slice(7)}
          className="waves-effect waves-light btn-large  cyan lighten-2 "
        >
          <i className="material-icons large">fast_forward</i>
        </Link>
        <a
          className="waves-effect waves-light btn-large orange darken-2  "
          onClick={handleClick}
        >
          <i className="material-icons large">delete</i>
        </a>
      </div>
      <div className="movie-image-container ">
        <img
          src={url[2]}
          alt=""
          className="movie-image"
        />
      </div>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: (id) => {
      dispatch(deleteMovie(id));
    },
  };
};
export default connect(null, mapDispatchToProps)(Movies);
