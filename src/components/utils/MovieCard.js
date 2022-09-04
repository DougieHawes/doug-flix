const MovieCard = (data) => {
  console.log(data);

  const { title } = data.item;

  return <div>{title}</div>;
};

export default MovieCard;
