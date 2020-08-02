import React ,{useEffect,useState}from "react";
import { useSelector } from "react-redux";
import { Typography, Grid } from "@material-ui/core";
import RingLoader from "react-spinners/RingLoader";

function ActorInfo(props) {
  const actor = useSelector((state) => state.movie.actor);
  const ActorLoading = useSelector((state) => state.movie.ActorLoading);
  const [loading, setloading] = useState({
    loading: true,
  });

  useEffect(() => {
    setloading({
      loading:ActorLoading
    })
  });

  return (
    <div>
      <RingLoader size={50} color={"#123abc"} loading={loading} />

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
