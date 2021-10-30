/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-area mt-5 py-5 ">
      <Container>
        <footer className="row">
          <div className="col-md-6 col-lg-3">
            <h2 className="text-warning">HABIB TOUR BD</h2>
            <img
              className="img-fluid"
              src="https://www.kokilabenhospital.com/images/reliance_logo.png"
              alt="logo of footer"
              width="150"
              height="50"
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Business</h3>
            <a href="#">FAQ</a>
            <br />
            <a href="#">Supplier Login</a>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Support</h3>
            <a href="#">Our partners</a>
            <br />
            <a href="#">Privacy policy</a>
            <br />
            <a href="#">Terms Of Use</a>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Contact Info</h3>
            <h3 className="text-brand">+123456789</h3>
            <p>15/E, Dhaka, Bangladesh </p>
            <a href="#">info@habibtour_bd.com</a>
            <br />
            <br />
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </footer>
        <div className="text-center">
          <p>Copyright © {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
