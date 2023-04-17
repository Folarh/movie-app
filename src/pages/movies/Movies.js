import React from "react";
import { useFetch } from "../../hooks/useFetch";
import SingleTrend from "../../components/SingleTrend";
export default function Movies() {
  const base = "77e46ec02c5fe30ee5cbc9c23bdd0344";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${base}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  const { data: movies, error, loading } = useFetch(url);
  console.log(movies);
  return (
    <div>
      <h2 className="page-title">Movies</h2>
      <div className="the-trends">
        {error && <div>{error}</div>}
        {loading && <div>loading...</div>}
        {movies &&
          movies.results.map((trend) => (
            <SingleTrend trend={trend} key={trend.id} />
          ))}
      </div>
    </div>
  );
}
