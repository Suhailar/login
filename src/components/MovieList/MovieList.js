import React from 'react';
import { Link } from 'react-router-dom'
import './MovieList.css'

const MovieList = () => {
  const movies = [
    { id: 1,
      title: 'Inception'},
    { id: 2,
      title: 'The Dark Knight'},
    { id: 3,
      title: 'Joker'},
    { id: 4,
      title: 'San Andreas'},
    { id: 5,
      title: 'Fantastic Four'},
  ];

  return (
    <div className="movie-list-container">
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/seat-selection/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList

