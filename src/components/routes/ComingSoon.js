import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../api/api";
import { APIKey } from "../api/ApiKey";

import "./style.scss";

const ComingSoon = () => {
  const [comingSoon, setComingSoon] = useState([]);

  useEffect(() => {
    const fetchComingSoon = async () => {
      const response = await api
        .get(`/en/API/ComingSoon/${APIKey}`)
        .catch((err) => console.log(err));

      setComingSoon(response.data.items.slice(0, 12));
    };

    fetchComingSoon();
  }, []);

  return (
    <>
      {comingSoon.map((i) => (
        <Link to={`/movie/${i.id}`}>
          <div key={i.id}>
            title: {i.title} - release-date: {i.releaseState}
          </div>
        </Link>
      ))}
    </>
  );
};

export default ComingSoon;
