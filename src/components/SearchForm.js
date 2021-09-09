import React, { useState } from "react";
import axios from "axios";

const SearchForm = ({ setSearchResult }) => {
  const searchMovies = async (text) => {
    try {
      let res = await axios.get(
        `https://www.omdbapi.com/?s=${text}&apikey=3f85b66e`
      );

      if (res.data.Error) {
        console.error(res.data.Error);
      } else {
        let sortedByYear = res.data.Search.sort((a, b) => a.Year - b.Year);
        let filtered = sortedByYear.filter((movie) => movie.Type === "movie");

        console.log(filtered);
        setSearchResult(filtered);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(movieName);
  };

  const [movieName, setMovieName] = useState("");

  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Filme (nome em inglês)"
        onChange={(e) => setMovieName(e.target.value)}
      />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchForm;
