import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.scss";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./components/routes/Home";
import MovieDetails from "./components/routes/MovieDetails";
import ShowDetails from "./components/routes/ShowDetails";
import PageNotFound from "./components/routes/PageNotFound";

import RecentMovies from "./components/routes/RecentMovies";
import RecentShows from "./components/routes/RecentShows";
import AllTimeMovies from "./components/routes/AllTimeMovies";
import AllTimeShows from "./components/routes/AllTimeShows";
import AllTimeBoxoffice from "./components/routes/AllTimeBoxoffice";
import ComingSoon from "./components/routes/ComingSoon";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recent-movies" element={<RecentMovies />} />
            <Route path="/recent-shows" element={<RecentShows />} />
            <Route path="/all-time-movies" element={<AllTimeMovies />} />
            <Route path="/all-time-shows" element={<AllTimeShows />} />
            <Route path="/all-time-boxoffice" element={<AllTimeBoxoffice />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/show/:id" element={<ShowDetails />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
