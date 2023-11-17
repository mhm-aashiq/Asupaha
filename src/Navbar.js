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
          
       
             <Link to='/' className='link ' >Home </Link>
          <Link to='/photos' className='link'  >Photos</Link>
          <Link to='/aboutus' className='link' >About Us </Link>
      
          </Nav>
        </Navbarr.Collapse>
      </Container>
    </Navbarr>
  );
}
<ul>
       
       <li><Link to='/'>Home</Link></li>
       <li><Link to='/newpost'>New Post</Link></li>
       <li><Link to='/about'>About</Link></li>
      
     
     </ul>

export default Navbar;