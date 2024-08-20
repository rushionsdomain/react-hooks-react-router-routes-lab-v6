import React from "react";
import { useParams } from "react-router-dom";

// Mock movie data
const movies = [
  {
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  // Add more movies as needed
];

const Movie = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      <div>
        {movie.genres.map((genre) => (
          <span key={genre}>{genre} </span>
        ))}
      </div>
    </div>
  );
};

export default Movie;
