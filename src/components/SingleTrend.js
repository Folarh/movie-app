import React from "react";
import { Link } from "react-router-dom";
import "./SingleTrend.css";
import { img_300 } from "../config/config";
import { Badge } from "@mui/material";

export default function SingleTrend({ trend }) {
  return (
    <div className="single-trend">
      <Link to={`/movieDetails/${trend.id}`}>
        <div className="card">
          <Badge
            badgeContent={trend.vote_average}
            color={trend.vote_average < 7 ? "secondary" : "primary"}
          />
          <img src={`${img_300}/${trend.poster_path}`} alt={trend.title} />
          <h4>{trend.title}</h4>
          <span className="subtitle">
            {trend.media_type === "tv" ? "Tv Series" : "Movie"}
            <span className="date">{trend.release_date}</span>
          </span>
        </div>
      </Link>
    </div>
  );
}
