// src/components/MovieCard.js
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div>
        {movie.genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
