import { Link} from 'react-router-dom'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbarr from 'react-bootstrap/Navbar';


const Navbar = () => {
  const logo = require('./image/logo.PNG')
  return (
    <Navbarr expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary rounded">
      <Container>
       
        <Navbarr.Brand > <Link to='/' className='link rounded ' ><img src={logo} width='90px'  /></Link></Navbarr.Brand>
        <Navbarr.Toggle aria-controls="basic-navbar-nav" />
        <Navbarr.Collapse id="basic-navbar-nav" className="ml-auto" >
          <Nav >
           
          </Nav>
           <Nav className="ms-auto ">
          
       
             <Link to='/Asupaha' className='link ' >Home </Link>
          <Link to='/Asupaha/photos' className='link'  >Photos</Link>
          <Link to='/Asupaha/aboutus' className='link' >About Us </Link>
      
          </Nav>
        </Navbarr.Collapse>
      </Container>
    </Navbarr>
  );
}


export default Navbar;