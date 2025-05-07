import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../api/tmdb';
import MovieSection from '../components/MovieSection';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(setMovies);
  }, []);

  return <MovieSection title="Popular Movies" movies={movies} />;
};

export default Home;


// Note: Here you add the Movie list Like how to add 