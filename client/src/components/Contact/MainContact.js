import React from 'react';
import DonateBlood from '../../assets/DonateBloodPageBanner.jpg';
import { Image } from 'react-bootstrap';
import Location from '../../assets/location.png';
import Email from '../../assets/email.png';
import Telephone from '../../assets/telephone.png';

const MainContact = () => {
  return (
    <>
    <div id="carouselExampleSlidesOnly" class="carousel category-wallpaper">
    <div class="carousel-inner">
      <div class="carousel-item active contact-box">
        
      </div>
    </div>
  </div>
    <div className="about-overlay-info contact-overlay mb-5">
      <h1 className="text-center mb-0">
        <span className="text-bg-orange">Get in Touch</span>
        <br />
      </h1>
      <p style={{ fontSize: '16px' }}>Call us for the quote</p>
      <div className="contact-info row align-items-start justify-content-center mt-2 mt-md-3">
        <a
          href="tel:9892275243"
          className="contact-info-box col-12 col-lg-3 col-md-5"
        >
          <div className="card border border-0">
            <div className="card-body">
              <h5 className="card-title p-3 contact-info-icon-wrapper">
              <Image src={Telephone} style={{ width: '34px' }} class="d-block w-100"/>
              </h5>
              <h4 style={{ fontFamily: 'var(--secondary-font)' }}>Call us</h4>
              <p>91+ 7021769954</p>
            </div>
          </div>
        </a>  
        <a
          href="mailto:imaillkfurniture@gmail.com"
          className="contact-info-box col-12 col-lg-3 col-md-5"
        >
          <div className="card border border-0">
            <div className="card-body">
              <h5 className="card-title p-3 contact-info-icon-wrapper">
              <Image src={Email} style={{ width: '34px' }} class="d-block w-100"/>
              </h5>
              <h4 style={{ fontFamily: 'var(--secondary-font)' }}>Email us</h4>
              <p>imaillkfurniture@gmail.com</p>
            </div>
          </div>
        </a>
        <a
          href="https://goo.gl/maps/1UpmQLkF6qrzwFbh9"
          target="_blank"
          className="contact-info-box col-12 col-lg-3 col-md-5"
        >
          <div className="card border border-0">
            <div className="card-body">
              <h5 className="card-title p-3 contact-info-icon-wrapper">
              <Image src={Location} style={{ width: '34px' }} class="d-block w-100"/>
              </h5>
              <h4 style={{ fontFamily: 'var(--secondary-font)' }}>Reach us</h4>
              <p>Bhoomi Park, Jankalyan Nagar, Malad(W)</p>
            </div>
          </div>
        </a>
      </div>
    </div></>
  );
};

export default MainContact;
