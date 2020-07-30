import React from "react";
import { useSelector } from "react-redux";

function Actor(props) {
  const actor = useSelector((state) => state.movie.actor);
 

  console.log(props);
  return (
    <div>
      <ul>
      <li>{actor.id}</li>
        <li>{actor.birthDate}</li>
        <li>{actor.birthPlace}</li>
        <li>{actor.id}</li>
        <li>{actor.gender}</li>
        <li>{actor.birthPlace}</li>
      </ul>
    </div>
  );
}
export default Actor;
