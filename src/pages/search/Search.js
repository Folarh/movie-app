import { Button, TextField } from "@mui/material";

import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import SearchList from "../../components/SearchList";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const base = "77e46ec02c5fe30ee5cbc9c23bdd0344";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${base}&query=${query}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResults(data.results))
      .catch((error) => console.error(error));
  };
  console.log(results);
  return (
    <div className="search">
      <div className="search-page">
        <TextField
          style={{ flex: 0.3 }}
          label="search"
          variant="filled"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ marginLeft: 10 }}
          onClick={handleSubmit}
        >
          <SearchIcon />
        </Button>
      </div>
      <div className="results-page">
        {results.map((result) => (
          <SearchList result={result} />
        ))}
      </div>
    </div>
  );
}
