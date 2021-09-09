import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, action }) => {
  return (
    <div className="grid-3">
      {movies
        ?.sort((a, b) =>
          a.Title.localeCompare(b.Title, "pt-br", { ignorePunctuation: true })
        )
        .map((movie, index) => (
          <MovieCard key={index} movie={movie} action={action} />
        ))}
    </div>
  );
};

export default MovieList;
