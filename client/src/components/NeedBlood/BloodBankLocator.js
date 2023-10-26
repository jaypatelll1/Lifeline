import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const BloodBankLocator = () => {
  const [cities, setCities] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState('');
  const navigate = useNavigate(); // Hook for programmatic navigation
  const { cityId } = useParams(); // Access the city parameter from the URL

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  useEffect(() => {
    axios.get('http://localhost:9000/donors/check/cities').then((response) => {
      setCities(response.data.cities);
    });
  }, []);

  useEffect(() => {
    // If the cityId parameter is present in the URL, set it in the state
    if (cityId) {
      setSelectedCityId(cityId);
    }
  }, [cityId]);

  return (
    <div className="container-fluid my-5" style={{ background: 'linear-gradient(180deg, rgba(234, 65, 86, 0.15) 0%, rgba(234, 65, 86, 0.03) 100%)' }}>
      <div className="container my-5">
        <div className="row flex-col d-flex align-items-top justify-content-between py-5">
          {/* Maps */}
          <div className="col-7 maps">
            <div style={{ height: '100%', width: '100%', overflow: 'hidden', borderRadius: '30px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}>
              <GoogleMapReact bootstrapURLKeys={{ key: apiKey }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                {/* You can add markers here if needed */}
                <AnyReactComponent lat={10.99835602} lng={77.01502627} text="My Marker" />
              </GoogleMapReact>
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

export default BloodBankLocator;
