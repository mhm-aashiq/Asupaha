
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ModalImage from "react-modal-image";
import './Night.css'
import AN from './image/asupaha night1.png'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Night = () => {
  return (
   <><center className='head'>
   <img src={AN} />
   </center>
   {/* <h3 className='text-center text-primary pt-2'>Photos Of Asupaha Night</h3> */}
    <ImageList className=''
      sx={{ width: '100%', height: '100%' }}
      variant="standard"
      // cols={4}
      // rowHeight={200}
    >
         
  
      {itemData.map((item,index) => (
          
        <ImageListItem key={index} cols={item.cols || 1} rows={item.rows || 1}  >
      <ModalImage className='rounded'
       small={item.img}
       large={item.img} 
     {...srcset(item.img, 121, item.rows, item.cols) }
       />
          {/* <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
         */}
        </ImageListItem>
         
      ))}
     
    </ImageList>
   
  </>
  );
}

const itemData = [
  {
    img: require('./image/m4.jpg'),
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: require('./image/Night/1.jpg'),
    title: 'Burger',
  },
  {
    img:  require('./image/Night/2.jpg'),
    title: 'Basketball',
  },
  {
    img:  require('./image/Night/2.jpg'),
    title: 'Fern',
  },
  {
    img:  require('./image/Night/2.jpg'),
    title: 'Basketball',
  },
  {
    img:  require('./image/Night/2.jpg'),
    title: 'Fern',
  },
  {
    img:  require('./image/Night/2.jpg'),
    title: 'Basketball',
  },
  {
    img:  require('./image/Night/2.jpg'),
    title: 'Fern',
  },
  {
    img:  require('./image/Night/2.jpg'),
    title: 'Fern',
  },
  {
    img:  require('./image/Night/18.jpg'),
    title: 'Tomato basil',
  },
  {
    img:  require('./image/Night/8.jpg'),
    title: 'Sea star',
  },
  {
    img:  require('./image/Night/1.jpg'),
    title: 'Bike',
    
  },

 
];
export default Night
