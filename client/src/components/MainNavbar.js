import React, { useState, useEffect } from 'react';
import { Navbar, Container, Image, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import Logoblack from '../assets/LogoBlack.png';

const NavigationBar = () => {
  const [activeNavLink, setActiveNavLink] = useState(''); // Initialize with an empty string
  const location = useLocation(); // Get the current location from React Router

  useEffect(() => {
    // Use the current location to determine the active NavLink
    if (location.pathname === '/') {
      setActiveNavLink('home');
    } else if (location.pathname === '/needblood') {
      setActiveNavLink('need-blood');
    } else if (location.pathname === '/donateblood') {
      setActiveNavLink('donate-blood');
    } else if (location.pathname === '/contactus') {
      setActiveNavLink('contact-us');
    }
  }, [location.pathname]);

  return (
    <Navbar bg="white" variant="light" expand="lg" style={{ height: '75px' }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src={Logoblack} alt="LOGO" style={{ width: '200px' }} fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className='nav-alignment'>
          <Nav className="">
            <Nav.Link
              as={Link} to="/"
              className={`mynav-link me-4 py-2 px-3 btn btn-outline-danger rounded-pill border-0 ${activeNavLink === 'home' && 'nav-active'}`}
              onClick={() => setActiveNavLink('home')} // Remove the handleNavLinkClick function
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link} to="/needblood"
              className={`mynav-link me-4 py-2 px-3 btn btn-outline-danger rounded-pill border-0 ${activeNavLink === 'need-blood' && 'nav-active'}`}
              onClick={() => setActiveNavLink('need-blood')}
            >
              Need Blood
            </Nav.Link>
            <Nav.Link
              as={Link} to="/donateblood"
              className={`mynav-link me-4 py-2 px-3 btn btn-outline-danger rounded-pill border-0 ${activeNavLink === 'donate-blood' && 'nav-active'}`}
              onClick={() => setActiveNavLink('donate-blood')}
            >
              Donate Blood
            </Nav.Link>
            <Nav.Link
              as={Link} to="/contactus"
              className={`mynav-link  py-2 px-3 btn btn-outline-danger rounded-pill border-0 ${activeNavLink === 'contact-us' && 'nav-active'}`}
              onClick={() => setActiveNavLink('contact-us')}
            >
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
