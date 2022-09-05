import { Link } from "react-router-dom";

export const Link1 = ({ link, text }) => (
  <Link to={link}>
    <div className="home-link">
      <h2 className="home-link-text">{text}</h2>
    </div>
  </Link>
);
