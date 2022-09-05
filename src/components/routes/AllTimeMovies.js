import { useEffect, useState } from "react";

import api from "../api/api";
import { APIKey } from "../api/ApiKey";

import MovieList from "../utils/MovieList";

import "./style.scss";

const AllTimeMovies = () => {
  const [allTimeMovies, setAllTimeMovies] = useState([]);

  useEffect(() => {
    const fetchAllTimeMovies = async () => {
      const response = await api
        .get(`/en/API/Top250Movies/${APIKey}`)
        .catch((err) => console.log(err));

      setAllTimeMovies(response.data.items.slice(0, 250));
    };

    fetchAllTimeMovies();
  }, []);

  return (
    <div>
      <MovieList items={allTimeMovies} />
    </div>
  );
};

export default AllTimeMovies;
