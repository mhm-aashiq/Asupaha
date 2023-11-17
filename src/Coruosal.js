

import Carousel from 'react-bootstrap/Carousel';


const Coruosal = () => {
    const photo = require('./image/Night/6.jpg');
    const photo1 = require('./image/Night/1.jpg');
    const photo2 = require('./image/Night/2.jpg');
  return (
    
    <Carousel fade className='pt-1 ' >
      <Carousel.Item >
        <img text="Dedication" src={photo} style={{ width:'100%',  backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'}} className=' rounded-3 '/>
      <Carousel.Caption >
        <h3 >Dedication</h3>
        <p >Our dedication Helps us!</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img text="Hardwork" src={photo1} style={{  width:'100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'}} className='rounded-3'/>
        <Carousel.Caption>
          <h3>Hardwork</h3>
          <p>Our talented mates Loves to Hardwork</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img text="Step up" src={photo2} style={{  width:'100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'}} className='rounded-3'/>
        <Carousel.Caption>
          <h3>Shinning</h3>
          <p>
            Our dedication and Hardwork helped us shinning in the school
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
  );
}

export default Coruosal;