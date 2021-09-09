import React from "react";
import { truncateString } from "../utils";

const MovieCard = ({ movie, action }) => {
  const { Title, Poster, onList } = movie;

  let movieObj = {
    Title,
    Poster,
  };

  const defaultPoster =
    "https://screenshotlayer.com/images/assets/placeholder.png";

  return (
    <div className="movie-card">
      <h3>{truncateString(Title, 23)}</h3>
      <img src={Poster !== "N/A" ? Poster : defaultPoster} alt="Movie Poster" />
      {onList ? (
        <button className="action-button" onClick={() => action(movieObj)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      ) : (
        <button className="action-button" onClick={() => action(movieObj)}>
          <i className="fas fa-plus-circle"></i>
        </button>
      )}
    </div>
  );
};

export default MovieCard;
