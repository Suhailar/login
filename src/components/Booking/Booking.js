import React from 'react';
import { useParams } from 'react-router-dom'
import './Booking.css'

const Booking = () => {
  const { movieId, selectedSeats } = useParams();

  const seatsArray = selectedSeats ? selectedSeats.split('-') : [];

  const movies = [
    { id: 1, title: 'Inception' },
    { id: 2, title: 'The Dark Knight' },
    { id: 3, title: 'Joker' },
    { id: 4, title: 'San Andreas' },
    { id: 5, title: 'Fantastic Four' },
  ];

  const selectedMovie = movies.find((movie) => movie.id === parseInt(movieId, 10));

  if (!selectedMovie) {
    return <p>Movie not found.</p>;
  }

  return (
    <div className="booking-confirmation-container">
      <h2>Booking Confirmation</h2>
      <p>Movie: {selectedMovie.title}</p>
      <p>Seats: {seatsArray.join(', ')}</p>
      <h3>Thank you for booking!</h3>
    </div>
  );
};

export default Booking
