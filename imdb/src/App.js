import React from "react";
import imdbImg from "./imdb.png";
import "./App.css";
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
        <header className="App-header col s12">
          <Link to='/'>
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
