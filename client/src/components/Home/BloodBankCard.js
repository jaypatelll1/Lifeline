import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, Col, Row } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const BloodBankCard = () => {
  const [bloodBanks, setBloodBanks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/bloodbanks/op")
      .then((res) => {
        console.log("Faiz")
        setBloodBanks(res.data.bloodBanks.slice(0, 5));
      })
      .catch((err) => {
        console.log("error")
         console.error(err);
      });
  }, []);

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <MapComponent />
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
              {console.log(bloodBanks)}
              {bloodBanks.map((bloodBank) => (
               
                <CardSection name={bloodBank.name} phone={bloodBank.phone} />
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

const MapComponent = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        borderRadius: "30px", // Add border radius
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Add shadow
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }} // Replace with your Google Maps API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* You can add markers here if needed */}
      </GoogleMapReact>
    </div>
  );
};

export default BloodBankCard;
