import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ p: 1,ml:8 }}>Movie Explorer App</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;