import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import './app-bar.component.scss';

import AccountModalComponent from '../account-modal/account.modal.component';
import LeftSideDrawer from '../app-drawer/app-drawer.component';

const AppBarComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <LeftSideDrawer />
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
