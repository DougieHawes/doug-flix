import MovieCard from "./MovieCard";

import "./style.scss";

const MovieList = ({ items, type }) => {
  return (
    <div className="movie-list">
      {items.map((i) => (
        <MovieCard key={i.id} item={i} type={type} />
      ))}
    </div>
  );
};

export default MovieList;
