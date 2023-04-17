import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
// import { useFetch } from "../../hooks/useFetch";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";

export default function Search() {
  // const { data: movies, error, loading } = useFetch();
  const [setSearch] = useState();

  return (
    <>
      <div className="search-page">
        <TextField
          style={{ flex: 0.3 }}
          label="search"
          variant="filled"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="contained" style={{ marginLeft: 10 }}>
          <SearchIcon />
        </Button>
      </div>
    </>
  );
}
