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

  // console.log(movieCast);

  // dispatch(fetchActor())

  const actorId = actorIds&&actorIds.map((item) => {
    // console.log(item);

    return (
      <div key={item} className="actors">

        <p> {item}</p>
        <Actor
          // name={item.name}
          // characters={item.characters ? item.characters[0] : "..."}
          id={item}
        />
      </div>
    );
  });

  const ActorLoading = useSelector((state) => state.movie.ActorLoading);

  // const actorInfo = () => {
  //   // if (ActorLoading == false) {
  //     return <ActorInfo />;
  //   // }
  // };

  return (
    <div>
      <h2>Actor</h2>

      <Grid className="actors-container" container>
        <Grid item item xs={4} className="movie_actors">
          {/* <Actor
          // name={item.name}
          // characters={item.characters ? item.characters[0] : "..."}
          // Casts={props.movieCast}
          /> */}
        </Grid>
        <Grid item xs={8} className="movie_actors_info">
          {/* {actorId} */}
        </Grid>
      </Grid>
    </div>
  );
}

export default Actors;
