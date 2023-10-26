import React from 'react';
import DonateBloodPageBanner from '../../assets/DonateBloodPageBanner.jpg';

const Hero = () => {
  return (
    <div className="hero container-fluid position-relative">
      <img src={DonateBloodPageBanner} className="d-block w-100 slider-img" alt="..." />
    </div>
  );
};

export default Hero;
