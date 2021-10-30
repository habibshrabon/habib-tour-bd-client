import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import MoreTravels from "../MoreTravels/MoreTravels";
import Packages from "../Packages/Packages";

const Home = () => {
  return (
    <div>
      <Banner />
      <Packages />
      <MoreTravels />
      <AboutUs />
    </div>
  );
};

export default Home;
