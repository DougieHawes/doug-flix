import { Link } from "react-router-dom";

import "./style.scss";

const MovieCard = (data) => {
  const { id, image } = data.item;

  return (
    <Link to={`/movie/${id}`}>
      <div className="movie-card">
        <img className="movie-card-image" src={image} alt="movie poster" />
      </div>
    </Link>
  );
};

export default MovieCard;
