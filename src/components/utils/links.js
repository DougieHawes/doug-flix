import { Link } from "react-router-dom";

import "./style.scss";

export const Link1 = ({ link, image, text }) => (
  <Link to={link}>
    <div className="home-link">
      <img className="home-link-image" src={image} alt="" />
      <h2 className="home-link-text">{text}</h2>
    </div>
  </Link>
);

export const Link2 = ({ item }) => (
  <Link to={`/movie/${item.id}`}>
    <div className="box-office-item" key={item.id}>
      <p className="box-office-item-rank">{item.rank}</p>
      <div className="box-office-item-details">
        <span className="box-office-item-banner">
          <h3 className="box-office-item-title">{item.title}</h3>
          <p className="box-office-item-year">{item.year}</p>
        </span>
        <img className="box-office-item-image" alt="" />
        <div className="box-office-item-gross">
          <p>
            Domestic
            <br />
            {item.domesticLifetimeGross}
          </p>
          <p>
            Foreign
            <br />
            {item.foreignLifetimeGross}
          </p>
          <p>
            Worldwide
            <br />
            {item.worldwideLifetimeGross}
          </p>
        </div>
      </div>
    </div>
  </Link>
);
