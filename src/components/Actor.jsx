import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { fetchActor } from "../Store/actions/moviesAction";
import "../css/actor.scss";

function Actor(props) {

  const dispatch = useDispatch();

  const handlSelectActor = () => {
    dispatch(fetchActor(props.id.slice(6)));
  };

  const actor = useSelector((state) => state.movie.actor);


  console.log(actor);




  return (
    <div>
      <Typography color="textSecondary">Actor</Typography>
      <a className="actor_link" onMouseOver={handlSelectActor}>
        <Typography component="p">{actor.name}</Typography>
      </a>

      <Typography color="textSecondary">Character</Typography>
      <Typography component="p">{props.characters}</Typography>
    </div>
  );
}
export default Actor;
