import { useEffect, useState } from "react";

import api from "../api/api";
import { APIKey } from "../api/ApiKey";

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
    <>
      {allTimeBoxoffice.map((i) => (
        <div key={i.id}>
          {i.rank} - {i.title} - {i.year} - domesticLifetimeGross:
          {i.domesticLifetimeGross} - foreignLifetimeGross:
          {i.foreignLifetimeGross} - worldwideLifetimeGross:
          {i.worldwideLifetimeGross}
        </div>
      ))}
    </>
  );
};

export default AllTimeBoxoffice;
