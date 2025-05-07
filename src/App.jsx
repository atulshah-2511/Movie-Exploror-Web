import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import MyList from './pages/MyList';
import MovieDetails from './pages/MovieDetails';
import Header from './components/Header';
import Sidebar from './components/sidebar'
import { MovieListProvider } from './context/MovieListContext';
import { Box } from '@mui/material';

function App() {
  return (
    <MovieListProvider>
      <Router>
        <Header />
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3, ml: 7, mt: 5 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my-list" element={<MyList />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </MovieListProvider>
  );
}

export default App;

//Note : Wrap to the component lik Home and Mylist with the provider 
