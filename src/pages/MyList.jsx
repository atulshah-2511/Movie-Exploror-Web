import React, { useContext } from 'react';
import  {MovieListContext}  from '../context/MovieListContext';
import MovieSection from '../components/MovieSection';

const MyList = () => {
  const { state } = useContext(MovieListContext);
  return <MovieSection title="My List" movies={state} />;
};

export default MyList;

// Note: Display another Component in Mylist