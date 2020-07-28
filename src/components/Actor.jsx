import React, { Component } from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import "../css/actor.scss";

class Actor extends Component {
  render() {
    const actor = this.props.actors.map((item) => {
      return (
        <div key={item.id}  className="actors">
          <Typography color="textSecondary">Actor</Typography>
          <Typography component="p">{item.name}</Typography>
          <Typography color="textSecondary">Character</Typography>
          <Typography component="p">{item.characters[0]}</Typography>
        </div>
      );
    });

    return (
      <div className="actor-container">
        <h2 >Actors</h2>
        {actor}
      </div>
    );
  }
}

export default Actor;
