import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiamF5cGF0ZWwwMSIsImEiOiJjbG55cXVrNmswdnFjMmpuMDJzYjRrZ29xIn0.AYv00ub55MRP2o-p5ZLSWQ'; // Replace with your Mapbox access token

const Marker = ({ longitude, latitude, text }) => (
  <div style={{
    color: 'white', 
    background: 'red',
    padding: '14px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

const BloodBankCard = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 10.99835602,
    longitude: 77.01502627,
    zoom: 11,
    width: '100%',
    height: '100%',
  });

  const markers = [
    // {latitude: 10.99835602, longitude: 77.01502627, name: "Marker 1"},
    // {latitude: 10.99835603, longitude: 77.01502628, name: "Marker 2"},
    // Add more markers as needed
  ];

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <div style={{ height: '100%', width: '100%', overflow:"hidden", borderRadius: '30px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
            <ReactMapGL
              {...viewport}
              mapboxApiAccessToken={MAPBOX_TOKEN}
              onViewportChange={viewport => {
                setViewport(viewport);
              }}
            >
              {markers.map((marker, index) => (
                <Marker 
                  key={index}
                  longitude={marker.longitude}
                  latitude={marker.latitude}
                  text={marker.name}
                />
              ))}
            </ReactMapGL>
          </div>
        </Col>
        <Col md={6}>
          <Card style={{ borderRadius: '30px', overflow: 'hidden' }}>
            <Card.Header className="text-center py-4 fw-bold" style={{ fontSize: '32px', color: 'white', background: 'var(--red)' }}>
              Nearest Blood Banks
            </Card.Header>
            <Card.Body>
              <CardSection name="Blood Bank 1" phone="1234567891" />
              <CardSection name="Blood Bank 2" phone="9876543210" />
              <CardSection name="Blood Bank 3" phone="5555555555" />
              <CardSection name="Blood Bank 4" phone="9999999999" />
              <CardSection name="Blood Bank 5" phone="1111111111" />
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
      <i className="fas fa-user" style={{ fontSize: '26px', color: 'var(--dark-blue)' }}></i>
    </Col>
    <Col xs={10}>
      <span className="fw-bold pb-5" style={{ color: 'var(--red)', fontSize: '20px' }}>{name}</span>
      <br />
      <span><i className="fas fa-phone-alt" style={{ fontSize: '18px' }}></i> {phone}</span>
    </Col>
  </Row>
);

export default BloodBankCard;
