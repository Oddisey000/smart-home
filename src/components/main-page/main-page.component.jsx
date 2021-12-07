import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppBarComponent from "../header/app-bar/app-bar.component";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const MainPageComponent = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBarComponent />
    </ThemeProvider>
  )
};

export default MainPageComponent;