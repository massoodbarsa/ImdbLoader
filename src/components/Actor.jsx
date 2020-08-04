import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/actor.scss";
import ActorInfo from "./ActorInfo";
import { fetchActor } from "../Store/actions/actorsAction";

function Actor(props) {
  const dispatch = useDispatch();

  // console.log(props.id);

  useEffect(() => {
    dispatch(fetchActor(props.id.slice(6)));
  }, []);
  const handlSelectActor = () => {};

  const actors = useSelector((state) => state.movie.actors);

  // console.log(actors);

  // const actor =
  //   actors &&
  //   actors.map((item) => {
  //     console.log(item);
  //     return (
  //       <div>
  //         <ActorInfo
  //         actor={item}
  //         />;
  //       </div>
  //     );
  //   });

  // const actors = useSelector((state) => state.movie.actors);

  const actor =
    actors &&
    actors.map((item) => {
      console.log(item.name);

      return (
        <div key={item.id} className="actors">
          <p>{item.name}</p>
          {/* <ActorInfo
          // name={item.name}
          // characters={item.characters ? item.characters[0] : "..."}
          actorId={item}
        /> */}
        </div>
      );
    });

  // console.log(actor);

  // const actorInfo = () => {
  //   // if (ActorLoading == false) {
  //     return <ActorInfo />;
  //   // }
  // };

  return (
    <div>
      actor
      {/* <p>{actor.name}</p> */}
      {/* <Typography color="textSecondary">Actor</Typography>
      <a className="actor_link" onMouseOver={handlSelectActor}>
        <Typography component="p">{''}</Typography>
      </a> */}
      {/* <ActorInfo casts={props.casts}/> */}
      {actor}
      {/* {casts} */}
      {/* <img
        // src={actor.image ? actor.image.url : null}
        alt=""
        className="movie-image"
      /> */}
    </div>
  );
}
export default Actor;
