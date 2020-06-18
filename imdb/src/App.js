import React from "react";
import imdbImg from "./imdb.png";
import "./App.scss";
import Imdb from "./components/Imdb";
import Movie from "./components/Movie";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header row ">
          <Link to="/" className="Navbar col s1">
            <i class="material-icons medium ">home</i>
          </Link>

          <Link to="/" className="col s8 App-logo-container">
            <img src={imdbImg} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Route exact path="/" component={Imdb} />
        <Route path="/:movie_id" component={Movie} />
      </div>
    </BrowserRouter>
  );
}

export default App;
