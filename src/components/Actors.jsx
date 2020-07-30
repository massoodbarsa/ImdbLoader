import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchActor } from "../Store/actions/moviesAction";
import Actor from "./Actor";

import "../css/actor.scss";

function Actors(props) {
  const dispatch = useDispatch();
  //add id to fetch from api
  //look at relation between movies and movie
  const handlSelectActor = (id) => {
    dispatch(fetchActor(id));
  };
  const actor = props.actors.map((item) => {
    return (
      <div key={item.id} className="actors">
        <Link to={"/actor/" + item.id.slice(6)} onClick={handlSelectActor(item.id.slice(6))}>
        {/* <Link onClick={handlSelectActor(item.id.slice(6))}> */}
          <Typography color="textSecondary">Actor</Typography>
        </Link>

        <Typography component="p">{item.name}</Typography>
        <Typography color="textSecondary">Character</Typography>
        <Typography component="p">
          {item.characters ? item.characters[0] : "..."}
        </Typography>
        {/* <Actor /> */}
      </div>
    );
  });

  return (
    <div className="actor-container">
      <h2>Actors</h2>
      {actor}
    </div>
  );
}

export default Actors;
