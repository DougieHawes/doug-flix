import { useEffect, useState } from "react";

import api from "../api/api";
import { APIKey } from "../api/ApiKey";

import MovieList from "../utils/MovieList";

import "./style.scss";

const Home = () => {
  const [recentMovies, setRecentMovies] = useState([]);
  const [recentShows, setRecentShows] = useState([]);
  const [allTimeMovies, setAllTimeMovies] = useState([]);
  const [allTimeShows, setAllTimeShows] = useState([]);
  const [allTimeBoxOffice, setAllTimeBoxOffice] = useState([]);
  const [comingSoon, setComingSoon] = useState([]);

  useEffect(() => {
    const fetchRecentMovies = async () => {
      const response = await api
        .get(`/en/API/MostPopularMovies/${APIKey}`)
        .catch((err) => console.log(err));

      setRecentMovies(response.data.items.slice(0, 12));
    };
    const fetchRecentShows = async () => {
      const response = await api
        .get(`/en/API/MostPopularTVs/${APIKey}`)
        .catch((err) => console.log(err));

      setRecentShows(response.data.items.slice(0, 12));
    };
    const fetchAllTimeMovies = async () => {
      const response = await api
        .get(`/en/API/Top250Movies/${APIKey}`)
        .catch((err) => console.log(err));

      setAllTimeMovies(response.data.items.slice(0, 12));
    };
    const fetchAllTimeShows = async () => {
      const response = await api
        .get(`/en/API/Top250Movies/${APIKey}`)
        .catch((err) => console.log(err));

      setAllTimeShows(response.data.items.slice(0, 12));
    };
    const fetchAllTimeBoxOffice = async () => {
      const response = await api
        .get(`/en/API/BoxOfficeAllTime/${APIKey}`)
        .catch((err) => console.log(err));

      setAllTimeBoxOffice(response.data.items.slice(0, 12));
    };
    const fetchComingSoon = async () => {
      const response = await api
        .get(`/en/API/ComingSoon/${APIKey}`)
        .catch((err) => console.log(err));

      setComingSoon(response.data.items.slice(0, 12));
    };

    fetchRecentMovies();
    fetchRecentShows();
    fetchAllTimeMovies();
    fetchAllTimeShows();
    fetchAllTimeBoxOffice();
    fetchComingSoon();
  }, []);

  return (
    <div className="home">
      <h2>RECENT-MOVIES</h2>
      <MovieList items={recentMovies} />
      <h2>RECENT SHOWS</h2>
      <MovieList items={recentShows} />
      <h2>ALL-TIME-MOVIES</h2>
      <MovieList items={allTimeMovies} />
      <h2>ALL-TIME-SHOWS</h2>
      <MovieList items={allTimeShows} />
      <h2>ALL-TIME-BOXOFFICE</h2>
      <MovieList items={allTimeBoxOffice} />
      <h2>COMING-SOON</h2>
      <MovieList items={comingSoon} />
    </div>
  );
};

export default Home;
