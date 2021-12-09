import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AppFloorComponent from './house-floor/house-floor.component';

const AppHouseComponent = () => {
  return (
    <Accordion style={{backgroundColor: "inherit", margin: "1%"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="house-content"
        className="house-header"
      >
        <Typography>Мій будинок #1</Typography>
      </AccordionSummary>
      <AccordionDetails style={{padding: 0}}>
        <AppFloorComponent />
      </AccordionDetails>
    </Accordion>
  );
}

export default AppHouseComponent;
