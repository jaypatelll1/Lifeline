import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Logowhite from '../assets/LogoWhite.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer mt-auto">
       <Container>
    <div className="row justify-content-between justify-content-lg-around">
      <div className="col-12 col-md-6 col-lg-8 footer-logo mb-4 m-lg-0">
        <a href="index.php" ><Image src={Logowhite}  fluid className="mb-3" alt="LOGO" /></a>
        <p className="footer-desc mb-3">Discover our life-saving platform, where compassion meets community. Crafted by developers Faiz Ansari, Jay Patel, Shree Shinde, and Vaibhav Raut, pursuing bachelor in third year information technology, welcome to the essence of giving life.</p>
        <div className="social-media-wrapper d-flex align-items-center justify-content-start">
          <a href="#"><i className="fab fa-instagram me-4"></i></a>
          <a href="#"><i className="fab fa-facebook me-4"></i></a>
          <a href="#"><i className="fab fa-youtube me-4"></i></a>
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-2 d-flex flex-column mb-4 m-lg-0">
  <h6 className="footer-head mb-4">Quick Links</h6>
  <Link to="/" className="footer-link mb-4">Home</Link>
  <Link to="/needblood" className="footer-link mb-4">Need Blood</Link>
  <Link to="/donateblood" className="footer-link mb-4">Donate Blood</Link>
  <Link to="/contactus" className="footer-link">Contact us</Link>
</div>

    </div>
  </Container>
    </div>
  );
};

export default Footer;
