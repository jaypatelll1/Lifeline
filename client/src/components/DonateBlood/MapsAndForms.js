import React from 'react';
import GoogleMapReact from 'google-map-react';
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapComponent = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div style={{ height: '100%', width: '100%', borderRadius: '30px', overflow: 'hidden', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:apiKey }}
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
  return (
    <div className="container-fluid" style={{ background: 'linear-gradient(180deg, rgba(234, 65, 86, 0.15) 0%, rgba(234, 65, 86, 0.03) 100%)' }}>
      <div className="container">
        <div className="row flex-col d-flex align-items-top justify-content-between">
          {/* Maps */}
          <div className="maps col-7 my-5">
            <MapComponent />
          </div>

          {/* Blood Donor Form */}
          <div className="col-4 card p-0 shadow my-5" style={{ borderRadius: '30px', overflow: 'hidden' }}>
            <h5 className="card-header text-center py-4 fw-bold" style={{ fontSize: '32px', color: 'white', background: 'var(--red)' }}> Nearest Blood Bank</h5>
            <div className="card-body my-4 mx-3">
              <form className="blood-donor-form">
                {/* District Select Menu */}
                <select className="form-select mb-4" aria-label="Default select example">
                  <option selected>District</option>
                  <option value="1">Mumbai Suburban</option>
                  <option value="2">Mumbai City</option>
                  <option value="3">Thane</option>
                </select>
                {/* City Select Menu */}
                <select className="form-select mb-4" aria-label="Default select example">
                  <option selected>City</option>
                  <option value="1">Andheri</option>
                  <option value="2">Borivali</option>
                  <option value="3">Malad</option>
                </select>
                {/* Blood Group Select Menu */}
                <select className="form-select mb-3" aria-label="Default select example">
                  <option selected>Blood Group</option>
                  <option value="1">A+</option>
                  <option value="2">A-</option>
                  <option value="3">B+</option>
                  <option value="3">B-</option>
                  <option value="3">O+</option>
                  <option value="3">O-</option>
                  <option value="3">AB+</option>
                  <option value="3">AB-</option>
                </select>
                <button type="submit" className="btn btn-danger rounded-pill py-2 px-3 mt-4">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapsAndForms;
