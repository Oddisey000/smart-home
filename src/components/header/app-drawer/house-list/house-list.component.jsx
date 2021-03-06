import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HouseList = () => {
  return (
      <Accordion style={{backgroundColor: "darkslategrey"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="house_list-content"
          id="house_list-header"
        >
          <Typography>Перелік будинків</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
  );
}

export default HouseList;
