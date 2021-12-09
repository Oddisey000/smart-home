import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AppRoomComponent from './house-chamber/house-room.component';

const AppFloorComponent = () => {
  return (
    <Accordion style={{backgroundColor: "aliceblue"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="floor-content"
        className="floor-header"
      >
        <Typography>Поверх #1</Typography>
      </AccordionSummary>
      <AccordionDetails style={{padding: 0}}>
        <AppRoomComponent />
      </AccordionDetails>
    </Accordion>
  );
}

export default AppFloorComponent;
