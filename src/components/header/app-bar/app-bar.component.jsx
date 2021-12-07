import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './app-bar.component.scss';

import AccountModalComponent from '../account-modal/account.modal.component';

const AppBarComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="warning" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span id="app-name">Smart Home</span>
          </Typography>
          <AccountModalComponent />
        </Toolbar>
      </AppBar>
    </Box>
  )
};

export default AppBarComponent;
