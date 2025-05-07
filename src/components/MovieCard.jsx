import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MovieListContext } from '../context/MovieListContext';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(MovieListContext);
  const isInList = state.some(item => item.id === movie.id);

  return (
    <Card sx={{ width: 250, m: 1 }}>
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        onClick={() => navigate(`/movie/${movie.id}`)}
        sx={{ cursor: 'pointer' }}
      />
      <CardContent>
        <Typography variant="subtitle1">{movie.title}</Typography>
        <Button
          variant="contained"
          onClick={() =>
            dispatch({ type: isInList ? 'REMOVE' : 'ADD', payload: movie })
          }
        >
          {isInList ? 'Remove' : 'Add to My List'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;

// NOte: For movie Card