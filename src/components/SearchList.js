import React from "react";
import MovieCard from "./MovieCard";

const SearchList = ({ movies, action }) => {
  return (
    <div className="grid-3">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} action={action} />
      ))}
    </div>
  );
};

export default SearchList;
