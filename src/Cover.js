import React from 'react'
import Image from 'react-bootstrap/Image';

const Cover = () => {

    const photo = require('./image/hi.jpg');
    const photo1 = require('./image/m3.jpg');
    const photo2 = require('./image/m4.jpg');

  return (
    <div>
     <Image src={photo1} className='img-fluid rounded  mt-1' fluid />
    </div>
       
  )
}

export default Cover