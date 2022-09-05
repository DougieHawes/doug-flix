import { useEffect, useState } from "react";

import api from "../api/api";
import { APIKey } from "../api/ApiKey";

import MovieList from "../utils/MovieList";

import "./style.scss";

const AllTimeShows = () => {
  const [allTimeShows, setAllTimeShows] = useState([]);

  useEffect(() => {
    const fetchAllTimeShows = async () => {
      const response = await api
        .get(`/en/API/Top250TVs/${APIKey}`)
        .catch((err) => console.log(err));

      setAllTimeShows(response.data.items.slice(0, 250));
    };

    fetchAllTimeShows();
  }, []);

  return (
    <div>
      <MovieList items={allTimeShows} />
    </div>
  );
};

export default AllTimeShows;
