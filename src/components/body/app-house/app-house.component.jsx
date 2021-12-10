import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import AppFloorComponent from './house-floor/house-floor.component';

const AppHouseComponent = () => {
  const [expanded, setExpanded] = React.useState();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <ClickAwayListener onClickAway={handleChange('house-content')}>
      <Accordion 
        style={{backgroundColor: "inherit", margin: "1%"}}
        expanded={expanded === 'house-content'} 
        onChange={handleChange('house-content')}
        className="house-header"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="house-content"
        >
          <ArrowRightIcon />
          <Typography>Мій будинок #1</Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding: 0}}>
          <AppFloorComponent />
        </AccordionDetails>
      </Accordion>
    </ClickAwayListener>
  );
}

export default AppHouseComponent;
