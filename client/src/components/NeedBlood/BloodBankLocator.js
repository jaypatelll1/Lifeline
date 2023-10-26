import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react'; // Import GoogleMapReact
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const BloodBankLocator = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div className="container-fluid my-5" style={{ background: 'linear-gradient(180deg, rgba(234, 65, 86, 0.15) 0%, rgba(234, 65, 86, 0.03) 100%)' }}>
      <div className="container my-5">
        <div className="row flex-col d-flex align-items-top justify-content-between py-5">
          {/* Maps */}
          <div className="col-7 maps">
            <div style={{ height: '100%', width: '100%', overflow:"hidden",
        borderRadius: '30px', // Add border radius
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'  }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey}}
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
          </div>

          {/* Blood Donor Form */}
          <div className="col-4 card p-0 shadow" style={{ borderRadius: '30px', overflow: 'hidden' }}>
            <Card.Header className="text-center py-4 fw-bold" style={{ fontSize: '32px', color: 'white', background: 'var(--red)' }}>
              Nearest Blood Bank
            </Card.Header>
            <Card.Body className="my-4 mx-3">
              <Form className="blood-donor-form">
                {/* District Select Menu */}
                <Form.Select className="form-select mb-4" aria-label="Default select example">
                  <option selected>District</option>
                  <option value="1">Mumbai Suburban</option>
                  <option value="2">Mumbai City</option>
                  <option value="3">Thane</option>
                </Form.Select>

                {/* City Select Menu */}
                <Form.Select className="form-select mb-4" aria-label="Default select example">
                  <option selected>City</option>
                  <option value="1">Andheri</option>
                  <option value="2">Borivali</option>
                  <option value="3">Malad</option>
                </Form.Select>

                {/* Blood Group Select Menu */}
                <Form.Select className="form-select mb-3" aria-label="Default select example">
                  <option selected>Blood Group</option>
                  <option value="1">A+</option>
                  <option value="2">A-</option>
                  <option value="3">B+</option>
                  <option value="3">B-</option>
                  <option value="3">O+</option>
                  <option value="3">O-</option>
                  <option value="3">AB+</option>
                  <option value="3">AB-</option>
                </Form.Select>

                <Button type="submit" className="btn btn-danger rounded-pill py-2 px-3 mt-4">Submit</Button>
              </Form>
            </Card.Body>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodBankLocator;
