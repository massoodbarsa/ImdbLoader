import React from "react";
import Actor from "./Actor";
import ActorInfo from "./ActorInfo";
import "../css/actor.scss";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

function Actors(props) {
  const actor = props.actors.map((item) => {
    return (
      <div key={item} className="actors">
        <Actor
          // name={item.name}
          // characters={item.characters ? item.characters[0] : "..."}
          id={item}
        />
      </div>
    );
  });

  const ActorLoading = useSelector((state) => state.movie.ActorLoading);

  const actorInfo = () => {
    if (ActorLoading == false) {
      return <ActorInfo />;
    }
  };

  return (
    <div>
      <h2>Actors</h2>

      <Grid className="actors-container" container>
        <Grid item item xs={4} className="movie_actors">
          {actor}
        </Grid>
        <Grid item xs={8} className="movie_actors_info">
          {actorInfo()}
        </Grid>
      </Grid>
    </div>
  );
}

export default Actors;
