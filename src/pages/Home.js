import React from "react";
import { Link } from "react-router-dom";

const movies = [
  { id: 1, title: "Doctor Strange" },
  { id: 2, title: "Trolls" },
  { id: 3, title: "Jack Reacher: Never Go Back" },
];

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Info</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
