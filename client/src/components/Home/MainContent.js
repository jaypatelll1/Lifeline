import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import MainLeft from '../../assets/MainLeftBanner.png';
import MainRight from '../../assets/MainRightBanner.png';

const MainContent = () => {
  return (
    <Container className="mx-auto my-md-4 my-3">
      <div className="row align-items-center justify-content-center flex-wrap flex-md-nowrap">
        <div className="col-12 col-md-6 me-lg-4 me-md-4">
          <div className="zigzag-content mb-3 mb-sm-0">
            <h1 className="mb-5">Saving <span style={{ color: 'var(--red)' }}>Lives</span> Through <span style={{ color: 'var(--red)' }}>Donation</span></h1>
            <p>Your blood donation can be a lifeline. It helps accident victims, surgical patients, and individuals with serious illnesses. <br /><br />

            With every donation, you contribute to a healthier community and offer hope to those in need.</p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="zigzag-img">
            <Image src={MainRight} fluid />
          </div>
        </div>
      </div>

      <Container className="mx-auto zigzag-second-wrapper my-md-4 my-3">
        <div className="row align-items-center justify-content-between flex-wrap flex-md-nowrap zigzag-second flex-row">
          <div className="col-12 col-md-6 me-lg-4 me-md-4">
            <div className="zigzag-img mt-3 mt-sm-0">
              <Image src={MainLeft} fluid />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="zigzag-content">
              <h1 className="mb-5">Who Can <span style={{ color: 'var(--red)' }}>Donate</span></h1>
              <p>Blood donation is open to healthy individuals meeting age, weight, and health criteria. Being transparent about your health history ensures the safety of both donors and recipients. 
              <br /><br />
              Even if you can't donate, you can still make a difference by encouraging eligible donors.</p>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default MainContent;
