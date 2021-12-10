import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import AppRoomComponent from './house-room/house-room.component';

const AppFloorComponent = () => {
  const [expanded, setExpanded] = React.useState();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <ClickAwayListener onClickAway={handleChange('floor-content')}>
      <Accordion 
        style={{backgroundColor: "aliceblue"}}
        expanded={expanded === 'floor-content'} 
        onChange={handleChange('floor-content')}
        className="floor-content"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="floor-content"
        >
          <ArrowRightIcon />
          <Typography> Поверх #1</Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding: 0}}>
          <AppRoomComponent />
        </AccordionDetails>
      </Accordion>
    </ClickAwayListener>
  );
}

export default AppFloorComponent;
