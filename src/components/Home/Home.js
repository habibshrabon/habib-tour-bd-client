import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Packages from "../Packages/Packages";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Packages />
      <Footer />
    </div>
  );
};

export default Home;
