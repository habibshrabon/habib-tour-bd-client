import React from "react";

const Footer = () => {
  return (
    <div className="bg-black py-5">
      <div className="container">
        <div className="footer ">
          <div className="text-white">
            <h2>HABIB TOUR BD</h2>
            <p>Powered By</p>
            <img
              className="img-fluid"
              src="https://www.kokilabenhospital.com/images/reliance_logo.png"
              alt="logo of footer"
              width="150"
              height="50"
            />
          </div>
        </div>
      </div>
      <div className="text-white text-center mt-5">
        Copyrights &copy; 2021 Habib Tour BD. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
