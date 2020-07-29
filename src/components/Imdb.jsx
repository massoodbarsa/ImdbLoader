import React, { useEffect } from "react";
import "../css/imdb.scss";
import Movies from "./Movies";
import { useSelector } from "react-redux";
import { Card, Typography } from "@material-ui/core";

function Imdb(props) {
  useEffect(() => {});
  const movies = useSelector((state) => state.movie.movies);
  const loading = useSelector((state) => state.movie.loading);

  const loadPage = () => {
    if (movies !== undefined && loading === false) {
      return (
        <section className="">
          {movies.map((item) => (
            <Movies
              key={item.id}
              id={item.id}
              title={item.title}
              type={item.titleType}
              numberOfEpisodes={item.numberOfEpisodes}
              year={item.year}
              seriesStartYear={item.seriesStartYear}
              seriesEndYear={item.seriesStartYear}
              image={item.image}
            />
          ))}
        </section>
      );
    } else
      return (
        <Card>
          <Typography
            color="textSecondary"
            variant="h5"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            Search your favorite movie or series
          </Typography>
        </Card>
      );
  };

  return <div className="">{loadPage()}</div>;
}

export default Imdb;
