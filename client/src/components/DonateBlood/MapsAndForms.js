import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const coordinatesArray = []; // Define coordinatesArray at the module level

const MapComponent = (props) => {
  const defaultProps = {
    center: {
      lat: 19.076090, 
      lng: 72.877426
    },
    zoom: 11,
  };

  const mapStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
    borderRadius: "30px",
    overflow: "hidden",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  };

  // Add markers using the coordinates from coordinatesArray
  const markers = coordinatesArray.map((coordinate, index) => (
    <Marker
      key={index}
      title="Blood Bank"
      name="Blood Bank"
      position={{ lat: coordinate.latitude, lng: coordinate.longitude }}
    />
  ));

  return (
    <div style={mapStyle}>
      <Map
        google={props.google}
        initialCenter={defaultProps.center}
        zoom={defaultProps.zoom}
      >
        {markers}
      </Map>
    </div>
  );
};

const MapsAndForms = (props) => {
  const [cities, setCities] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState("");
  const { cityId } = useParams();
  // const [selectedBloodBank, setSelectedBloodBank] = useState(null);
  const [bloodBanks, setBloodBanks] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL + "/donors/check/cities").then((response) => {
      setCities(response.data.cities);
    });
  }, []);

  useEffect(() => {
    if (cityId) {
      setSelectedCityId(cityId);
    }
  }, [cityId]);

  useEffect(() => {
    const apiUrl = cityId
      ? `${BASE_URL}/bloodbanks/op/${cityId}`
      : BASE_URL + "/bloodbanks/op";

    axios.get(apiUrl)
      .then((response) => {
        setBloodBanks(response.data.bloodBanks);
        // Extract coordinates and set in the state
        const coordinates = response.data.bloodBanks.map((bloodBank) => ({
          latitude: bloodBank.latitude,
          longitude: bloodBank.longitude,
        }));
        coordinatesArray.length = 0; // Clear the array
        coordinatesArray.push(...coordinates); // Push new coordinates
      })
      .catch((error) => {
        console.error("Error fetching blood banks:", error);
      });
  }, [cityId]);

  const handleCityChange = (event) => {
    setSelectedCityId(event.target.value);
  };

  return (
    <div className="container-fluid" style={{ background: "linear-gradient(180deg, rgba(234, 65, 86, 0.15) 0%, rgba(234, 65, 86, 0.03) 100%" }}>
      <div className="container">
        <div className="row flex-col d-flex align-items-top justify-content-between">
          <div className="maps col-7 my-5" style={{height:"400px"}}>
            <MapComponent google={props.google} />
          </div>

          <div className="col-4 card p-0 shadow my-5" style={{ borderRadius: "30px", overflow: "hidden" }}>
            <h5 className="card-header text-center py-4 fw-bold" style={{ fontSize: "26px", color: "white", background: "var(--red)" }}>
              Nearest Blood Bank
            </h5>
            <div className="card-body my-4 mx-3 d-flex align-items-center justify-content-center">
              <form className="blood-donor-form w-100">
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
                  className="btn btn-danger rounded-pill w-auto py-2 px-3 mt-4"
                  onClick={(e) => {
                    if (!selectedCityId) {
                      e.preventDefault();
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
