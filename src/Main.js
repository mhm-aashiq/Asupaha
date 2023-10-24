import React from 'react'
import ReactTyped from "react-typed";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Coruosal from './Coruosal';


const Main = () => {

  const photo = require('./image/hi.jpg');
  const photo1 = require('./image/m3.jpg');
  const photo2 = require('./image/m4.jpg');
return (
    <>
    <Coruosal />
  <div className="row mt-4 pb-3">
   
    <h2 className='text-center text-primary '>We are{" "}
        <ReactTyped
          strings={["Brothers", "Bloods", "Family"]}
          typeSpeed={200}
          loop
          backSpeed={100}
          cursorChar="|"
          showCursor={true}
        /></h2>

         <hr />

    <div className="col-lg-4 col-md-4 col-sm-4">

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={photo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

      
    </div>
    <div className=" col-lg-4 col-md-4 col-sm-4 border-start" >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={photo1}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      {/* <video className='h-50 w-100 ' style={{objectFit: 'cover !important'}}  src = {Video} loop={true} controls autoPlay={true} muted={true} /> */}
    </div>
    <div className=" col-lg-4 col-md-4 col-sm-4 border-start" >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={photo2}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> 
    </div>

    
    
  </div>
  </>
  
  

    
  )
}

export default Main