  import Container from 'react-bootstrap/Container';
  import Navbar from 'react-bootstrap/Navbar';
  import NASA_logo from '../../src/assets/images/bgimg.jpg';
  import { Link } from "react-router-dom";
  import { IoSearchOutline } from "react-icons/io5";
  import Nav from 'react-bootstrap/Nav';
  function NavBar() {
    return (
      <Navbar expand="lg" className="bg-transparent position-sticky top-0">
        <Container>
          <Navbar.Brand href="#home"><img src={NASA_logo} className='logo' alt ='' ></img></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Navbar.Text className=' px-3'>
            <Link to='/' className='text-decoration-none text-light'>Home</Link>
            </Navbar.Text>
            <Navbar.Text className='text-decoration-none text-light px-3'>
            <Link to='/Anyphoto' className='text-decoration-none text-light'>Astronomy Picture of the Day</Link>
            </Navbar.Text>  
            <Navbar.Text className='text-decoration-none text-light px-3'>
            <Link to='/Searchpage' className='text-decoration-none text-light'><IoSearchOutline /> Search</Link>
            </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default NavBar;