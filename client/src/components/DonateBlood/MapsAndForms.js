import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import { Link, useNavigate, useParams } from "react-router-dom";
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
        borderRadius: "30px",
        overflow: "hidden",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* You can add markers here if needed */}
        <AnyReactComponent
          lat={10.99835602}
          lng={77.01502627}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
};

const MapsAndForms = () => {
  const [cities, setCities] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState(""); // Use selectedCityId to control the selected value
  const navigate = useNavigate();
  const { cityId } = useParams();

  useEffect(() => {
    axios.get("http://localhost:9000/donors/check/cities").then((response) => {
      setCities(response.data.cities);
    });
  }, []);

  useEffect(() => {
    if (cityId) {
      setSelectedCityId(cityId);
    }
  }, [cityId]);

  const handleCityChange = (event) => {
    setSelectedCityId(event.target.value); // Update selectedCityId when the user selects a city
  };

  return (
    <div className="container-fluid" style={{ background: "linear-gradient(180deg, rgba(234, 65, 86, 0.15) 0%, rgba(234, 65, 86, 0.03) 100%)" }}>
      <div className="container">
        <div className="row flex-col d-flex align-items-top justify-content-between">
          <div className="maps col-7 my-5">
            <MapComponent />
          </div>

          <div className="col-4 card p-0 shadow my-5" style={{ borderRadius: "30px", overflow: "hidden" }}>
            <h5 className="card-header text-center py-4 fw-bold" style={{ fontSize: "32px", color: "white", background: "var(--red)" }}>
              Nearest Blood Bank
            </h5>
            <div className="card-body my-4 mx-3">
              <form className="blood-donor-form">
                <select className="form-select mb-4" aria-label="Default select example" value={selectedCityId} onChange={handleCityChange}>
                  <option value="" disabled>City</option>
                  {cities.map((city) => (
                    <option key={city.city} value={city.city}>
                      {city.city}
                    </option>
                  ))}
                </select>

                <Button
                  type="submit"
                  as={Link}
                  to={`/donateblood/${selectedCityId}`}
                  className="btn btn-danger rounded-pill py-2 px-3 mt-4"
                  onClick={(e) => {
                    if (!selectedCityId) {
                      e.preventDefault(); // Prevent form submission if city is not selected
                    }
                  }}
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapsAndForms;