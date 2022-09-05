import { useEffect, useState } from "react";

import api from "../api/api";
import { APIKey } from "../api/ApiKey";

import MovieList from "../utils/MovieList";

import "./style.scss";

const RecentMovies = () => {
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    const fetchRecentMovies = async () => {
      const response = await api
        .get(`/en/API/MostPopularMovies/${APIKey}`)
        .catch((err) => console.log(err));

      setRecentMovies(response.data.items.slice(0, 12));
    };

    fetchRecentMovies();
  }, []);

  return (
    <div>
      <MovieList items={recentMovies} />
    </div>
  );
};

export default RecentMovies;
