import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Cover from './Cover';


const AboutUs = () => {
  return (
    <div>
      <Cover />
      <div className='col-lg-12 col-md-12 col-sm-12 pt-3'>
        <hr />
        <h3 className='text-secondary'> About - ASUPAHA </h3>
        <p className=''></p>
      
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-primary'>Who are we!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are the 85<sup>th</sup> batch of Zahira National School Mawanella. We started our studies Since 
            2004. The batch of 2015 O/L and 2018 A/L. Our history makes us more powerfull 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='text-success'>Shinning stars</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            simply, our activites make us the stars of the day and most people loves us by our dedications and effert to the program that we loves.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className='text-danger'>Seniority</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            simply, our activites make us the stars of the day and most people loves us by our dedications and effert to the program that we loves.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  )
}

export default AboutUs