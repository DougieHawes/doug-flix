import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../api/api";
import { APIKey } from "../api/ApiKey";

const ShowDetails = () => {
  const [show, setShow] = useState({});

  const params = useParams();

  useEffect(() => {
    const fetchShow = async () => {
      const response = await api
        .get(`/en/API/Title/${APIKey}/${params.id}`)
        .catch((err) => console.log(err));

      console.log(response.data);
      setShow(response.data);
    };

    fetchShow();
  }, []);

  return (
    <div>
      <h4>{show.title}</h4>
    </div>
  );
};

export default ShowDetails;
