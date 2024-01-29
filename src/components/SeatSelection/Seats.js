import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './Seats.css'

const Seats = () => {
  const { movieId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    const fetchMovieDetails = async () => {
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

      const movie = movies.find((movie) => movie.id === parseInt(movieId, 10));
      setSelectedMovie(movie);
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleSeatClick = (seat) => {
    const updatedSeats = selectedSeats.includes(seat)
      ? selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      : [...selectedSeats, seat];

    setSelectedSeats(updatedSeats);
  };

  return (
    <div className='seat-selection-container'>
      <h2>Seat Selection</h2>
      {selectedMovie && <p className='select-movie'>Movie: {selectedMovie.title}</p>}
      <h3>Select Seats</h3>
      <div className="seat-grid">
        {['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3','D1', 'D2', 'D3', 'E1', 'E2', 'E3', 'F1', 'F2', 'F3'].map((seat) => (
          <div
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seat)}
          >
            {seat}
          </div>
        ))}
      </div>

      {selectedSeats.length > 0 && (
        <Link to={`/booking-confirmation/${movieId}/${selectedSeats.join('-')}`}className="confirm-link">
          Confirm Booking
        </Link>
      )}
    </div>
  )
}

export default Seats;
