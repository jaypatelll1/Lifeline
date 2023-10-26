import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import HeroImage from '../../assets/NeedBloodPageBanner.jpg';

const Hero = () => {
  return (
<Container fluid className="hero container-fluid position-relative">
        <Image src={HeroImage} className="d-block w-100 slider-img" alt="..." fluid />
      </Container>
  );
};

export default Hero;
