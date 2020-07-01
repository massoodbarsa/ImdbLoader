import React, { Component } from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

class Actor extends Component {
  render() {
    const actor = this.props.actors.map((item) => {
      return (
        <div  
        key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "10px",
            textAlign: "left",
          }}
        >
          <Typography color="textSecondary">Actor</Typography>
          <Typography component="p">{item.name}</Typography>
          <Typography color="textSecondary">Character</Typography>
          <Typography component="p">{item.characters[0]}</Typography>
          {/* <Typography color="textSecondary" gutterBottom>
              Id
            </Typography>
            <Typography variant="body2" component="p" >
              {item.id}
            </Typography> */}
        </div>
      );
    });

    return (
      <div>
        <h2 style={{ textAlign: "left" }}>Actors</h2>
        {actor}
      </div>
    );
  }
}

export default Actor;
