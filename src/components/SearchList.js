import React from "react";
import "./SearchList.css";
import { img_300 } from "../config/config";
import { Badge } from "@mui/material";

export default function SingleTrend({ result }) {
  return (
    <div className="single-trend">
      <div className="card">
        <Badge
          badgeContent={result.vote_average}
          color={result.vote_average < 7 ? "secondary" : "primary"}
        />
        <img src={`${img_300}/${result.poster_path}`} alt={result.title} />
        <h4>{result.title}</h4>
        <span className="subtitle">
          {result.media_type === "tv" ? "Tv Series" : "Movie"}
          <span className="date">{result.release_date}</span>
        </span>
      </div>
    </div>
  );
}
