import { useEffect, useState } from "react";

import api from "../api/api";
import { APIKey } from "../api/ApiKey";

import MovieList from "../utils/MovieList";

import "./style.scss";

const RecentShows = () => {
  const [recentShows, setRecentShows] = useState([]);

  useEffect(() => {
    const fetchRecentShows = async () => {
      const response = await api
        .get(`/en/API/MostPopularTVs/${APIKey}`)
        .catch((err) => console.log(err));

      setRecentShows(response.data.items.slice(0, 12));
    };

    fetchRecentShows();
  }, []);

  return (
    <div>
      <MovieList items={recentShows} />
    </div>
  );
};

export default RecentShows;
