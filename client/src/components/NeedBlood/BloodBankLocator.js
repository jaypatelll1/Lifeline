import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const BloodBankLocator = (props) => {
  const [cities, setCities] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState("");
  const { cityId } = useParams();
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Fetch cities
    axios.get(BASE_URL + "/donors/check/cities")
      .then((response) => {
        // Ensure cities is an array
        const fetchedCities = response.data?.cities || [];
        setCities(fetchedCities);
        console.log(fetchedCities)
      })
      .catch(err => {
        console.error('Error fetching cities:', err);
      });

    if (cityId) {
      setSelectedCityId(cityId);
      fetchMarkers(cityId);
    }
  }, [cityId]);

  const fetchMarkers = (city) => {
    axios.get(`${BASE_URL}/donors/check/markers/${city}`)
      .then((response) => {
        // Ensure coordinates is an array
        const fetchedCoordinates = response.data?.cordinates || [];
        setMarkers(fetchedCoordinates);
      })
      .catch(err => {
        console.error('Error fetching markers:', err);
      });
  };

  const handleCityChange = (event) => {
    const newCityId = event.target.value;
    setSelectedCityId(newCityId);
    fetchMarkers(newCityId);
  };

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
    position: "relative",
    borderRadius: "30px",
    overflow: "hidden",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div
      className="container-fluid my-5"
      style={{
        background:
          "linear-gradient(180deg, rgba(234, 65, 86, 0.15) 0%, rgba(234, 65, 86, 0.03) 100%)",
      }}
    >
      <div className="container my-5">
        <div className="row flex-col d-flex align-items-top justify-content-between py-5">
          {/* Maps */}
          <div className="col-7 maps">
            <div style={mapStyles}>
              <Map
                google={props.google}
                zoom={defaultProps.zoom}
                initialCenter={defaultProps.center}
                style={mapStyles}
              >
                {markers.map((marker, index) => (
                  <Marker
                    key={index}
                    title={`Marker ${index}`}
                    name={`Marker ${index}`}
                    position={{
                      lat: parseFloat(marker.latitude),
                      lng: parseFloat(marker.longitude),
                    }}
                  />
                ))}
              </Map>
            </div>
          </div>

          {/* Blood Donor Form */}
          <div
            className="col-4 card p-0 shadow"
            style={{ borderRadius: "30px", overflow: "hidden" }}
          >
            <Card.Header
              className="text-center py-4 fw-bold"
              style={{
                fontSize: "26px",
                color: "white",
                background: "var(--red)",
              }}
            >
              Nearest Blood Donor
            </Card.Header>
            <Card.Body className="my-4 mx-3">
              <Form className="blood-donor-form">
                <>
                  {/* City Select Menu */}
                  <Form.Select
                    className="form-select mb-4"
                    aria-label="Default select example"
                    onChange={handleCityChange}
                    value={selectedCityId}
                  >
                    <option value="">Select City</option>
                    {cities.length > 0 ? (
                      cities.map((city, index) => (
                        <option key={index} value={city.city}>
                          {city.city}
                        </option>
                      ))
                    ) : (
                      <option value="">No cities available</option>
                    )}
                  </Form.Select>

                  <Button
                    type="submit"
                    as={Link}
                    to={`/needblood/${selectedCityId}`}
                    className="btn btn-danger rounded-pill py-2 px-3 mt-4"
                    onClick={(e) => {
                      if (!selectedCityId) {
                        e.preventDefault(); // Prevent form submission if city is not selected
                      }
                    }}
                  >
                    Submit
                  </Button>
                </>
              </Form>
            </Card.Body>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: apiKey,
})(BloodBankLocator);
