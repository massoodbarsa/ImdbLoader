import React from "react";
import { useSelector } from "react-redux";
import { Typography, Grid } from "@material-ui/core";

function ActorInfo(props) {
  const actor = useSelector((state) => state.movie.actor);

  console.log(actor);
  return (
    <div>
      <Typography color="textSecondary">Name</Typography>
      <Typography component="p">{actor.name}</Typography>

      <Typography color="textSecondary">BirthDate</Typography>
      <Typography component="p">{actor.birthDate}</Typography>

      <Typography color="textSecondary">BirthPlace</Typography>
      <Typography component="p">{actor.birthPlace}</Typography>

      <Typography color="textSecondary">Gender</Typography>
      <Typography component="p">{actor.gender}</Typography>

      <Typography color="textSecondary">Height</Typography>
      <Typography component="p">{actor.heightCentimeters}</Typography>
      {/* <Typography component="p">{actor.characters}</Typography> */}
    </div>
  );
}
export default ActorInfo;
