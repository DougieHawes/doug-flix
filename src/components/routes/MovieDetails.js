import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../api/api";
import { APIKey } from "../api/ApiKey";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await api
        .get(`/en/API/Title/${APIKey}/${params.id}`)
        .catch((err) => console.log(err));

      console.log(response.data);
      setMovie(response.data);
    };

    fetchMovie();
  }, []);

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <p>{movie.releaseDate}</p>
      <div>
        {
          // movie.directorList.map((i) => (
          //   <div key={i.id}>{i.name}</div>
          // ))
        }
      </div>
      <div>
        {
          // movie.writersList.map((i) => (
          //   <div key={i.id}>{i.name}</div>
          // ))
        }
      </div>
      <p>{movie.plot}</p>
      <p>{movie.runtimeStr}</p>
      <p>{movie.awards}</p>
      <p>{movie.countries}</p>
      <p>Rating: {movie.contentRating}</p>
      <p>{movie.genres}</p>
      <p>IMDB Rating: {movie.imDbRating}</p>
      <p>IMDB Votes: {movie.imDbRatingVotes}</p>
      <div>
        {
          // movie.companyList.map((i) => (
          //   <div>{i.name}</div>
          // ))
        }
      </div>
      <img src={movie.image} alt="" />
      <div className="actor-list">
        {
          // movie.actorList.map((i) => (
          //   <Link key={i.id} to={`/actor/${i.id}`}>
          //     <div className="actor-card">
          //       <h4 className="actor-name">{i.name}</h4>
          //       <img className="actor-image" src={i.image} alt="" />
          //       <p className="actor-character">{i.asCharacter}</p>
          //     </div>
          //   </Link>
          // ))
        }
      </div>
      <div className="similars-list">
        {
          // movie.similars.map((i) => (
          //   <Link key={i.id} to={`/movie/${i.id}`}>
          //     <div className="similars-card">
          //       <h4 className="similars-name">{i.title}</h4>
          //       <img className="similars-image" src={i.image} alt="" />
          //       <p className="similars-rating">{i.imDbRating}</p>
          //     </div>
          //   </Link>
          // ))
        }
      </div>
    </div>
  );
};

export default MovieDetails;
