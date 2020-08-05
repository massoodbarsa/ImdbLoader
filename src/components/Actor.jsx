import React, { useEffect } from "react";
// import { Typography, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import "../css/actor.scss";
import { fetchActor } from "../Store/actions/actorsAction";
import {
  Grid,
  CircularProgress,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

function Actor(props) {
  const classes = useStyles();

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
            <List className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Avtor avatar" src={item.image.url}/>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <React.Fragment>
              
                      <Typography color="textSecondary">Name</Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {item ? item.name : ""}
                      </Typography>
                      <Typography color="textSecondary">BirthDate</Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {item.birthDate}
                      </Typography>
                      <Typography color="textSecondary">BirthPlace</Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {item.birthPlace}
                      </Typography>
                      <Typography color="textSecondary">Gender</Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {item.gender}
                      </Typography>
                      <Typography color="textSecondary">Height</Typography>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {item.heightCentimeters}
                      </Typography>
                      {/* {" — I'll be in your neighborhood doing errands this…"} */}
                    </React.Fragment>
                  }
                />
              </ListItem>
              {/* <Divider variant="inset" component="li" /> */}
            </List>
         
          </Grid>
        );
      }
    });

  return <div>{actor}</div>;
}
export default Actor;
