import { Link } from "react-router-dom";

import "./style.scss";

const MovieCard = ({ item, type }) => {
  const { id, image } = item;

  return (
    <Link to={`/${type}/${id}`}>
      <div className="movie-card">
        <img className="movie-card-image" src={image} alt="movie poster" />
      </div>
    </Link>
  );
};

export default MovieCard;
