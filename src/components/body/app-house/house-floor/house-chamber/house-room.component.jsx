import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AppRoomComponent = () => {
  return (
    <Accordion disableGutters={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="room-content"
        className="room-header"
      >
        <Typography>Кімната #1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Тут знаходитимуться елементи управління
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default AppRoomComponent;
