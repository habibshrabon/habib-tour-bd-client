import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/1.jpg";
import banner2 from "../../images/2.jpg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
