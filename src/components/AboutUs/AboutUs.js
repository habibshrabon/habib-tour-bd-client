import React from "react";
import image from "../../images/singapore.jpg";

const AboutUs = () => {
  return (
    <div>
      <section className="container content-height">
        <h2 className="text-center py-5">About Us</h2>
        <div className="row align-items-center pb-5">
          <div className="col-md-6 p-5 padding">
            <h2 className="text-style">Why Choose Us</h2>
            <hr />
            <img className="img-fluid p-5" src={image} alt="" />
          </div>
          <div className="col-md-6">
            <img className="img-fluid p-5" src={image} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
