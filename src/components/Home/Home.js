import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Packages from "../Packages/Packages";

const Home = () => {
  return (
    <div>
      <Banner />
      <Packages />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
