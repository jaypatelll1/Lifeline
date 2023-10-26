import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import HeroImage from "../../assets/HeroImage.jpg";
import { Link } from 'react-router-dom';
 
const HeroSection = () => {
  return (
    <Container fluid className="hero position-relative">
      <Image
        src={HeroImage}
        className="d-block w-100 slider-img"
        alt="..."
        fluid
      />
      <div className="hero-content">
        <span className="hero-caption">CHANGE THEIR LIFE</span>
        <h1 className="hero-heading mb-5">
          donate <span style={{ color: "var(--red)" }}>Blood</span> To <br />{" "}
          Save Life
        </h1>
        <div className="hero-btn">
          <Button
            as={Link}
            to="/donateblood"
            variant="danger"
            className="py-3 px-4 rounded-pill me-4 text-capitalize fw-bold"
            style={{ letterSpacing: "1.5px" }}
          >
            Start Donating
          </Button>
          <Button
            as={Link}
            to="/needblood"
            variant="danger"
            className="py-3 px-4 rounded-pill text-capitalize fw-bold"
            style={{ letterSpacing: "1.5px" }}
          >
            Need Blood
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
