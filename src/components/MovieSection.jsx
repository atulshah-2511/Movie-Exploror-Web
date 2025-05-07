import React from 'react';
import { Box, Typography } from '@mui/material';
import MovieCard from './MovieCard';

const MovieSection = ({ title, movies }) => (
  <Box sx={{ padding: 2 }}>
    <Typography variant="h4">{title}</Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </Box>
  </Box>
);

export default MovieSection;