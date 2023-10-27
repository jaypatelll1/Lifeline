import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const apiKey = "";

const BloodBankLocator = (props) => {
  const [cities, setCities] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState('');
  const { cityId } = useParams();
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Fetch cities and markers
    axios.get('http://localhost:9000/donors/check/cities').then((response) => {
      setCities(response.data.cities);
      
      // console.log(response.data.cordinates);         
      // Assuming response.data.cordinates is the array of coordinates
const coordinates = response.data.cordinates;

coordinates.forEach((coordinate, index) => {
  const latitude = coordinate.latitude;
  const longitude = coordinate.longitude;
  console.log(`Coordinate ${index + 1}: Latitude ${latitude}, Longitude ${longitude}`);
  setMarkers(coordinates);
});

    });

    if (cityId) {
      setSelectedCityId(cityId);
    }
  }, [cityId]);

  const defaultProps = {
    center: {
      lat: 19.4553598,
      lng: 73.4550915,
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
    <div className="container-fluid my-5" style={{ background: 'linear-gradient(180deg, rgba(234, 65, 86, 0.15) 0%, rgba(234, 65, 86, 0.03) 100%)' }}>
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
      position={{ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) }}
    />
  ))}
</Map>

            </div>
          </div>

          {/* Blood Donor Form */}
          <div className="col-4 card p-0 shadow" style={{ borderRadius: '30px', overflow: 'hidden' }}>
            <Card.Header className="text-center py-4 fw-bold" style={{ fontSize: '32px', color: 'white', background: 'var(--red)' }}>
              Nearest Blood Bank
            </Card.Header>
            <Card.Body className="my-4 mx-3">
              <Form className="blood-donor-form">
                <>
                  {/* City Select Menu */}
                  <Form.Select className="form-select mb-4" aria-label="Default select example" onChange={(event) => setSelectedCityId(event.target.value)} value={selectedCityId}>
                    <option value="">City</option>
                    {cities.map((city) => (
                      <option key={city.city} value={city.city}>
                        {city.city}
                      </option>
                    ))}
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
