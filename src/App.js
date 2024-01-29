import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './components/Login/Login'
import MovieList from './components/MovieList/MovieList'
import Seats from './components/SeatSelection/Seats'
import Booking from './components/Booking/Booking'

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null)

  const handleLogin = (username) => {
    setLoggedInUser(username)
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/movie-list"
          element={loggedInUser ? <MovieList /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/seat-selection/:movieId" element={<Seats />} />
        <Route path="/booking-confirmation/:movieId/:selectedSeats" element={<Booking />} />
      </Routes>
    </Router>
  );
};

export default App;
