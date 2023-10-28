import React from "react";
import Hero from "../components/NeedBlood/Hero";
import MainNavbar from "../components/MainNavbar";
import Table from "../components/NeedBlood/Table";
import Footer from "../components/Footer";

import "../App.css";
import MapsAndForms from "../components/NeedBlood/BloodBankLocator";
const NeedBlood = () => {
  return (
    <>
      <MainNavbar />
      <Hero />
      <MapsAndForms />
      <Table />
      <Footer />
    </>
  );
};

export default NeedBlood;
