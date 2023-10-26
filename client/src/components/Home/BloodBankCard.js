import React, { useState, useEffect } from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const BloodBankCard = (props) => {
  const [bloodBanks, setBloodBanks] = useState([
    { name: "Blood Bank 1", lat: 10.99835602, lng: 77.01502627, phone: "123-456-7890" },
    { name: "Blood Bank 2", lat: 11.99845602, lng: 77.01512627, phone: "987-654-3210" },
    { name: "Blood Bank 3", lat: 12.99855602, lng: 77.01522627, phone: "555-555-5555" },
    { name: "Blood Bank 4", lat: 13.99865602, lng: 77.01532627, phone: "777-777-7777" },
    { name: "Blood Bank 5", lat: 14.99875602, lng: 77.01542627, phone: "999-999-9999" },
  ]);

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <MapComponent google={props.google} bloodBanks={bloodBanks} />
        </Col>
        <Col md={6}>
          <Card style={{ borderRadius: "30px", overflow: "hidden" }}>
            <Card.Header
              className="text-center py-4 fw-bold"
              style={{
                fontSize: "32px",
                color: "white",
                background: "var(--red)",
              }}
            >
              Nearest Blood Banks
            </Card.Header>
            <Card.Body>
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
    <Col xs={1} className="d-flex align-items-center justify-content-center">
      <i
        className="fas fa-user"
        style={{ fontSize: "26px", color: "var(--dark-blue)" }}
      ></i>
    </Col>
    <Col xs={10}>
      <span
        className="fw-bold pb-5"
        style={{ color: "var(--red)", fontSize: "20px" }}
      >
        {name}
      </span>
      <br />
      <span>
        <i className="fas fa-phone-alt" style={{ fontSize: "18px" }}></i>{" "}
        {phone}
      </span>
    </Col>
  </Row>
);

const MapComponent = (props) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
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
