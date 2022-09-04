import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.scss";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./components/routes/Home";
import MovieDetails from "./components/routes/MovieDetails";
import ShowDetails from "./components/routes/ShowDetails";
import PageNotFound from "./components/routes/PageNotFound";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
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
