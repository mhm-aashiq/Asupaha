import React, { useEffect, useState } from 'react'


const Cover = () => {

    const photo = require('./image/Night/23.jpg');
    const photo1 = require('./image/Night/15.jpg');
    const photo2 = require('./image/Night/24.jpg');

    const images = [photo,photo1,photo2]

    const [currentImage, setCurrentImage] = useState(photo1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * 3)]);
        }, 3000)
        
        return () => clearInterval(intervalId);
    }, [])


  return (
    <div>
      
     <img src={currentImage} className='img-fluid rounded  mt-1'  />
    </div>
       
  )
}

export default Cover