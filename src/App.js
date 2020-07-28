import React from "react";
import imdbImg from "./imdb.png";
import "./App.scss";
import Imdb from "./components/Imdb";
import Movie from "./components/Movie";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./components/searchBar";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Grid className="App">
        <Grid className="App-header container">
          <Grid item xs={2}  >
            <Link to="/" >
            <FontAwesomeIcon icon={faHome} size="2x" color="#286b92" className="Home_icon"/>
            </Link>
          </Grid>
          <Grid item xs={8} className=" App-logo-container">
            <Link to="/" >
              <img src={imdbImg} className="App-logo" alt="logo" />
            </Link>
          </Grid>
        </Grid>
        <Grid>
          <SearchBar/>
        </Grid>
        <Route exact path="/" component={Imdb} />
        <Route path="/:movie_id" component={Movie} />
      </Grid>
    </BrowserRouter>
  );
}

export default App;
