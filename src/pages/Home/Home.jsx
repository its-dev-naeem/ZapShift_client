import React from "react";
import Banner from "./Banner/Banner";
import HowWorks from "./HowWorks/HowWorks";
import OurServices from "./OurServices/OurServices";
import Brands from "./Brands/Brands";
import Reviews from "./Reviews/Reviews";
import FAQ from "./FAQ/FAQ";
import CustomerSatisfaction from "./Castomer/CustomerSatisfaction";
import Features from "./Features/Features";

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <HowWorks></HowWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <Features></Features>
      <CustomerSatisfaction></CustomerSatisfaction>
      <Reviews></Reviews>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
