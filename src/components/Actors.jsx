import React, { useEffect } from "react";
import Actor from "./Actor";
import ActorInfo from "./ActorInfo";
import "../css/actor.scss";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { fetchActor } from "../Store/actions/moviesAction";

function Actors(props) {
  const dispatch = useDispatch();

  const actorIds = useSelector((state) => state.movie.movieCast).slice(0, 3);

  const actor =
    actorIds &&
    actorIds.map((item) => {
      return (
        <div key={item} className="actors">
          <Actor id={item} />
        </div>
      );
    });

  const ActorLoading = useSelector((state) => state.movie.ActorLoading);

  return (
    <div>
      <h2>Actors</h2>

      <Grid className="actors-container" container>
        <Grid item item xs={3} className="movie_actors"></Grid>
        <Grid item xs={9} className="movie_actors_info">
          {actor}
        </Grid>
      </Grid>
    </div>
  );
}

export default Actors;
