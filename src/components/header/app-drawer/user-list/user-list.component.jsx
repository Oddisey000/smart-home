import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const UserList = () => {
  return (
      <Accordion style={{backgroundColor: "inherit"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="user_list-content"
          className="user_list-header"
        >
          <Typography>Реєстр користувачів</Typography>
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

export default UserList;
