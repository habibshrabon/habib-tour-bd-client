import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/c1.jpg";
import banner2 from "../../images/c4.jpg";
import banner3 from "../../images/c5.jpg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h2>WE ARE HAPPY</h2>
            <h2>TO MAKE YOU HAPPIER</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <h2>WE ARE HAPPY</h2>
            <h2>TO MAKE YOU HAPPIER</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Second slide" />
          <Carousel.Caption>
            <h2>WE ARE HAPPY</h2>
            <h2>TO MAKE YOU HAPPIER</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
