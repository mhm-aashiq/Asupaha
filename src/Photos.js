import React from 'react'
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';
import Video from'./videos/entry.mp4'
import ReactTyped from "react-typed";

const Photos = () => {
  return (
    <div className='row pt-4 pb-3'>

<h2 className='text-center text-primary '>Our Unforgottable{" "}
        <ReactTyped
          strings={["Memeories", "Pictures", "Loves"]}
          typeSpeed={200}
          loop
          backSpeed={100}
          cursorChar="|"
          showCursor={true}
          style={{color:'maroon'}}
        /></h2>

         <hr />

    <div className='col-lg-12 col-md-12 pt-3'>
    <Box
    component="ul"
    sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}>
   
    <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
      <CardCover>
     
          <video loop={true}  autoPlay={true} muted={true} controls={true} src={Video} type="video/mp4">

</video>
       
      </CardCover>
      <CardContent>
        <Typography
          level="body-lg"
          fontWeight="lg"
          textColor="#fff"
          mt={{ xs: 12, sm: 18 }}
        >
          ASUPAHA Night
        </Typography>
      </CardContent>
    </Card>
  </Box>
  </div>


  <div className='col-lg-12 col-md-12 pt-3'>
    <Box
    component="ul"
    sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p:0, m: 0 }}>
    <Card component="li" sx={{  minWidth: 450, flexGrow: 1 }}>
    <Link><CardCover>
        <img
          src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
          srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </CardCover>  </Link>
      <CardContent>
      <Link to='night' className='link'> <Typography
          level="body-lg"
          fontWeight="lg"
          textColor="#fff"
          mt={{ xs: 12, sm: 18 }}

          style={{textDecoration:'none'}}
        >
          Asupaha Night 
        </Typography></Link>
      </CardContent>
    </Card> 

    
    <Card component="li" sx={{  minWidth: 450, flexGrow: 1 }}>
    <Link><CardCover>
        <img
          src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
          srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </CardCover>  </Link>
      <CardContent>
      <Link to='walk' className='link'> <Typography
          level="body-lg"
          fontWeight="lg"
          textColor="#fff"
          mt={{ xs: 12, sm: 18 }}

          style={{textDecoration:'none'}}
        >
          Zahira Walk
        </Typography></Link>
      </CardContent>
    </Card>

    <Card component="li" sx={{  minWidth: 450, flexGrow: 1 }}>
    <Link><CardCover>
        <img
          src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
          srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </CardCover>  </Link>
      <CardContent>
      <Link to='marathon' className='link'> <Typography
          level="body-lg"
          fontWeight="lg"
          textColor="#fff"
          mt={{ xs: 12, sm: 18 }}

          style={{textDecoration:'none'}}
        >
          Zahira Marathon
        </Typography></Link>
      </CardContent>
    </Card>


    <Card component="li" sx={{  minWidth: 450, flexGrow: 1 }}>
    <Link><CardCover>
        <img
          src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
          srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </CardCover>  </Link>
      <CardContent>
      <Link to='futsal' className='link'> <Typography
          level="body-lg"
          fontWeight="lg"
          textColor="#fff"
          mt={{ xs: 12, sm: 18 }}

          style={{textDecoration:'none'}}
        >
          Futsal
        </Typography></Link>
      </CardContent>
    </Card>
    

    
  </Box>
  </div>


  </div>// end of row
  )
}

export default Photos