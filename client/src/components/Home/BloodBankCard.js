import React, { useState, useEffect } from 'react';
import { Container, Card, Col, Row, Image } from 'react-bootstrap';
import bloodBankSymbol from "../../assets/blood-bank-symbol.png";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Telephone from '../../assets/telephone.png';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const BloodBankCard = (props) => {
  const [bloodBanks, setBloodBanks] = useState([
    { name: "Malad Blood Bank", lat: 19.214618, lng: 72.887196, phone: "022 2844 5678" },
    { name: "Suburban Hitech Blood Bank", lat: 19.214618, lng: 72.887196, phone:  "022 2871 4070" },
    { name: "Prabodhan Blood Bank", lat: 19.190636, lng: 72.834353, phone: "555-555-5555" },
    { name: "Goregaon Blood Bank", lat: 19.193718, lng: 72.835463, phone:  "022 2633 1323" },
    { name: "Hiranandani Hospital and Research Centre Blood Bank", lat: 19.129861, lng: 72.834217, phone:  "022 2844 1449" },
  ]);
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <MapComponent google={props.google} bloodBanks={bloodBanks} />
        </Col>
        <Col md={6}>
          <Card style={{ borderRadius: "30px", overflow: "hidden" }} className='shadow border-1 border-danger'>
            <Card.Header
              className="text-center py-3 fw-bold"
              style={{
                fontSize: "26px",
                color: "white",
                background: "var(--red)",
                letterSpacing: "2px",
              }}
            >
              Nearest Blood Banks
            </Card.Header>
            <Card.Body className="p-0">
              {bloodBanks.map((bloodBank, index) => (
                <CardSection
                  key={index}
                  name={bloodBank.name}
                  phone={bloodBank.phone}
                />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const CardSection = ({ name, phone }) => (
  <Row className="border-bottom px-3 py-3 border-bottom border-danger">
    
    <Col xs={12}>
      <span
        className="d-flex align-items-center ms-4 py-2"
        style={{ color: "var(--red)", fontSize: "18px" , fontWeight: "500"}}
      >
        <Image src={bloodBankSymbol} style={{ width: '20px' }} className="me-3"/>
        {name}
      </span>
      <a href={"tel:"+phone} className=' ms-4'>
      <Image src={Telephone} style={{ width: '20px' }} className="me-3"/>
        {phone}
      </a>
    </Col>
  </Row>
);

const MapComponent = (props) => {
  const defaultProps = {
    center: {
      lat: 19.076090, 
      lng: 72.877426
    },
    zoom: 11,
  };

  const mapStyles = {
    width: "100%",
    height: "100%",
    position: "relative", // Ensure that the map stays within its container
    borderRadius: "30px",
    overflow: "hidden",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={mapStyles}>
      <Map
        google={props.google}
        initialCenter={defaultProps.center}
        zoom={defaultProps.zoom}
        style={mapStyles}
      >
        {props.bloodBanks.map((bloodBank, index) => (
          <Marker
            key={index}
            title={bloodBank.name}
            name={bloodBank.name}
            position={{ lat: bloodBank.lat, lng: bloodBank.lng }}
          />
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey,
})(BloodBankCard);
