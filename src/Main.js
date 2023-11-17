import React from 'react'
import ReactTyped from "react-typed";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Coruosal from './Coruosal';
import './Main.css'


const Main = () => {

  const photo = require('./image/Night/18.jpg');
  const photo1 = require('./image/Walk/1.jpg');
  const photo2 = require('./image/Night/9.jpg');
return (
    <div>
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
  </div>

    <div className="row mt-4"> 
    <div className='col-lg-4'>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={photo}
      />
   
    </Card>

    </div>
    <div className='col-lg-8'>
      <Card sx={{ minHeight: 200 }}>
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem sequi, magni sapiente omnis ipsa fugit aperiam numquam, consequuntur consectetur molestiae voluptate debitis cumque tempore facere laudantium ab, est excepturi?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
    </div>
   
    </div>


    <div className="row mt-4"> 
    <div className='col-lg-4'>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={photo1}
      />
   
    </Card>

    </div>
    <div className='col-lg-8'>
    <Card sx={{ minHeight: 200 }}>
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem sequi, magni sapiente omnis ipsa fugit aperiam numquam, consequuntur consectetur molestiae voluptate debitis cumque tempore facere laudantium ab, est excepturi?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
    </div>
   
    </div>

    <div className="row mt-4 mb-4"> 
    <div className='col-lg-4'>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={photo2}
      />
   
    </Card>

    </div>
    <div className='col-lg-8'>
    <Card sx={{ minHeight: 200 }}>
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem sequi, magni sapiente omnis ipsa fugit aperiam numquam, consequuntur consectetur molestiae voluptate debitis cumque tempore facere laudantium ab, est excepturi?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
    </div>
   
    </div>

  </div>
  
  )
}

export default Main