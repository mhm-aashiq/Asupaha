
import Footer from './Footer';
import Main from './Main';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Routes ,Route } from 'react-router-dom'
import AboutUs from './AboutUs';
import Photos from './Photos';

function App() {
  return (
    <div className="container">
      <Navbar />
      {/* <Coruosal /> */}
      <Routes>
      <Route path='/'  element={<Main />}  />
      <Route path='aboutus' element={ <AboutUs />} />
      <Route path='Photos' element={ <Photos /> } />
  </Routes>
       <Footer /> 
    </div>
  );
}

export default App;
