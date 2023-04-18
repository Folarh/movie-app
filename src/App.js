import { BrowserRouter, Route, Routes } from "react-router-dom";
//styles
import "./App.css";

//components
import Header from "./components/Header";
import NavBar from "./components/NavBar";

//pages
import Trending from "./pages/trending/Trending";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Search from "./pages/search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </div>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
