import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import DeviceListComponent from './device-list/device-list.component';

const AppRoomComponent = () => {
  const [expanded, setExpanded] = React.useState();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <ClickAwayListener onClickAway={handleChange('room-header')}>
      <Accordion 
        disableGutters={true}
        expanded={expanded === 'room-header'} 
        onChange={handleChange('room-header')}
        className="room-header"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="room-content"
        >
          <ArrowRightIcon />
          <Typography>Кімната #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DeviceListComponent />
        </AccordionDetails>
      </Accordion>
    </ClickAwayListener>
  );
}

export default AppRoomComponent;
