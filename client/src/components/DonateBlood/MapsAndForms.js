import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;



const MapComponent = (props) => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const mapStyle = {
    width: "100%",
    height: "100%",
    position: "relative", // Ensure that the map stays within its container
    borderRadius: "30px",
    overflow: "hidden",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={mapStyle}>
      <Map
        google={props.google}
        initialCenter={defaultProps.center}
        zoom={defaultProps.zoom}
      >
        {/* You can add markers here if needed */}
        <Marker
          title="My Marker"
          name="My Marker"
          position={{ lat: 10.99835602, lng: 77.01502627 }}
        />
      </Map>
    </div>
  );
};

const MapsAndForms = (props) => {
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
            <MapComponent google={props.google} />
          </div>

          <div className="col-4 card p-0 shadow my-5" style={{ borderRadius: "30px", overflow: "hidden" }}>
            <h5 className="card-header text-center py-4 fw-bold" style={{ fontSize: "26px", color: "white", background: "var(--red)" }}>
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

export default GoogleApiWrapper({
  apiKey: apiKey,
})(MapsAndForms);
