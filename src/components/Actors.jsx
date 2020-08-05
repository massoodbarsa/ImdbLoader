import React, { useEffect } from "react";
import Actor from "./Actor";
import "../css/actor.scss";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

function Actors(props) {
  const actorIds = useSelector((state) => state&&state.movie.movieCast);

  const actor =
    actorIds &&
    actorIds.slice(0, 3).map((item) => {
      return (
        <div key={item} className="actors">
          <Actor id={item} />
        </div>
      );
    });

  return (
    <div>
      <h2>Actors</h2>

      <Grid className="actors-container" container>
        <Grid item xs={9} className="movie_actors_info">
          {actor}
        </Grid>
      </Grid>
    </div>
  );
}

export default Actors;
