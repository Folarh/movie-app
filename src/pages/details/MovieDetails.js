import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
// import { img_300 } from "../../config/config";
// import { Badge } from "@mui/material";

export default function MovieDetails() {
  const { id } = useParams;
  const base = "77e46ec02c5fe30ee5cbc9c23bdd0344";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${base}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  const { data: movie } = useFetch(url);
  console.log(movie);
  return (
    <div className="movie-details">
      <div className="head">
        <h1>MovieDetails</h1>
      </div>
      {/* <h1>{movie.title}</h1> */}
    </div>
  );
}
