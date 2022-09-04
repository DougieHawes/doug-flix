import MovieCard from "./MovieCard";

const MovieList = (items) => {
  return (
    <div>
      <div>
        {items.items.map((i) => (
          <MovieCard item={i} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
