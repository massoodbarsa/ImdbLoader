import React, { useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/actor.scss";
import ActorInfo from "./ActorInfo";
import { fetchActor } from "../Store/actions/actorsAction";

function Actor(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActor(props.id.slice(6)));
  }, []);

  const actors = useSelector((state) => state.actor.actors);

  const actor =
    actors &&
    actors.map((item) => {
      if (item.id === props.id) {
        return (
          <Grid container key={item.id} className="actors">
            <Grid item item xs={4}>
              <Typography color="textSecondary">Name</Typography>
              <Typography component="p">{item ? item.name : ""}</Typography>
              <Typography color="textSecondary">BirthDate</Typography>
              <Typography component="p">{item.birthDate}</Typography>
              <Typography color="textSecondary">BirthPlace</Typography>
              <Typography component="p">{item.birthPlace}</Typography>
              <Typography color="textSecondary">Gender</Typography>
              <Typography component="p">{item.gender}</Typography>
              <Typography color="textSecondary">Height</Typography>
              <Typography component="p">
                {item.heightCentimeters}
              </Typography>{" "}
            </Grid>
            <Grid item item xs={8}>
              <img src={item.image.url} alt="" className="movie-image" />
            </Grid>
          </Grid>
        );
      }
    });

  return <div>{actor}</div>;
}
export default Actor;
