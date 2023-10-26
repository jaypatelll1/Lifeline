import React from "react";
import Hero from "../components/NeedBlood/Hero";
import MainNavbar from "../components/MainNavbar";
import Table from "../components/NeedBlood/Table";
import Footer from "../components/Footer";
import BloodBankLocator from "../components/NeedBlood/BloodBankLocator";
import "../App.css";
const NeedBlood = () => {
  return (
    <>
      <MainNavbar />
      <Hero />
      <BloodBankLocator />
      <Table />
      <Footer />
    </>
  );
};

export default NeedBlood;
