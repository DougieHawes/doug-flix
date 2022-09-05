import { useEffect, useState } from "react";

import api from "../api/api";
import { APIKey } from "../api/ApiKey";

import { Link2 } from "../utils/links";

import "./style.scss";

const AllTimeBoxoffice = () => {
  const [allTimeBoxoffice, setAllTimeBoxoffice] = useState([]);

  useEffect(() => {
    const fetchAllTimeBoxOffice = async () => {
      const response = await api
        .get(`/en/API/BoxOfficeAllTime/${APIKey}`)
        .catch((err) => console.log(err));

      setAllTimeBoxoffice(response.data.items.slice(0, 12));
    };

    fetchAllTimeBoxOffice();
  }, []);

  return (
    <div className="box-office-wrapper">
      {allTimeBoxoffice.map((i) => (
        <Link2 key={i.id} item={i} />
      ))}
    </div>
  );
};

export default AllTimeBoxoffice;
