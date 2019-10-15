import React from "react";
import { Link } from "react-router-dom";

const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(props.movie);
  };

  return (
    <div className="movie-card">
      <Link to={`/movies/${id}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </Link>
      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
    </div>
  );
};

export default MovieCard;
