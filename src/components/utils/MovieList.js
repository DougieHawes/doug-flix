import MovieCard from "./MovieCard";

import "./style.scss";

const MovieList = ({ items }) => {
  return (
    <div className="movie-list">
      {items.map((i) => (
        <MovieCard key={i.id} item={i} />
      ))}
    </div>
  );
};

export default MovieList;
