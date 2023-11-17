
import Footer from './Footer';
import Main from './Main';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Routes ,Route } from 'react-router-dom'
import AboutUs from './AboutUs';
import Photos from './Photos';
import Night from './Night';
import Walk from './Walk';
import Marathon from './Marathon';
import Futsal from './Futsal';

function App() {
  return (
    <div className="container">
      <Navbar />
     
      <Routes>
      <Route path='/Asupaha' exact  element={<Main />}  />
      <Route path='Asupaha/aboutus' element={ <AboutUs />} />
      <Route path='Asupaha/Photos' element={ <Photos /> } />
      <Route path='Asupaha/Photos/night' element={ <Night /> } />
      <Route path='Asupaha/Photos/walk' element={ <Walk /> } />
      <Route path='Asupaha/Photos/marathon' element={ <Marathon /> } />
      <Route path='Asupaha/Photos/futsal' element={ <Futsal /> } />
      </Routes>
       <Footer /> 
    </div>
  );
}

export default App;
