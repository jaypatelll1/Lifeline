import React from 'react';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import "../App.css"
import Hero from '../components/DonateBlood/Hero';
import MapsAndForms from '../components/DonateBlood/MapsAndForms';
import TableWithModal from '../components/DonateBlood/TableWithModal';
import GetDonorInfoForm from '../components/DonateBlood/GetDonorInfoForm';

function DonateBlood() {
  return (
    <div>
      <MainNavbar />
      <Hero/>
      <GetDonorInfoForm/>
      <MapsAndForms/>
      <TableWithModal/>
      <Footer />
    </div>
  );
}

export default DonateBlood;
