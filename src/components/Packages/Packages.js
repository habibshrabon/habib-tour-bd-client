import React, { useEffect, useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Packages = () => {
  // const [packages, setPackages] = useState([]);

  // useEffect(() => {
  //   fetch(package)
  //     .then((res) => res.json())
  //     .then((data) => setPackages(data));
  // }, []);
  return (
    <div className="container">
      <div className="py-5">
        <h2 className="pb-4 fw-bold text-center">
          OUR PACKAGES <hr />
        </h2>
        <div className="row">
          <div className="col-md-4 mb-3 ">
            <div className="card h-100 card-bg opacity box-shadow">
              <img
                src="https://img-public.freepik.com/preview/free-photo/abstract-fantasy-landscape-background_23-2149124338.jpg"
                style={{ height: "275px" }}
                className="card-img-top justify-content-center align-items-center img-fluid"
                alt="sakib"
              />
              <div className="card-body">
                <h3 className="card-title text-center">Sakhawat Hossin</h3>
                <p className="text-style">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam, suscipit deleniti! Pariatur temporibus omnis minima!
                </p>
                <button className="btn btn-style px-3 ms-auto">
                  <FontAwesomeIcon icon={faArrowRight} /> Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 ">
            <div className="card h-100 card-bg opacity box-shadow">
              <img
                src="https://img-public.freepik.com/preview/free-photo/abstract-fantasy-landscape-background_23-2149124338.jpg"
                style={{ height: "275px" }}
                className="card-img-top justify-content-center align-items-center img-fluid"
                alt="sakib"
              />
              <div className="card-body">
                <h3 className="card-title text-center">Sakhawat Hossin</h3>
                <p className="text-style">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam, suscipit deleniti! Pariatur temporibus omnis minima!
                </p>
                <button className="btn btn-style px-3 ms-auto">
                  <FontAwesomeIcon icon={faArrowRight} /> Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 ">
            <div className="card h-100 card-bg opacity box-shadow">
              <img
                src="https://img-public.freepik.com/preview/free-photo/abstract-fantasy-landscape-background_23-2149124338.jpg"
                style={{ height: "275px" }}
                className="card-img-top justify-content-center align-items-center img-fluid"
                alt="sakib"
              />
              <div className="card-body">
                <h3 className="card-title text-center">Sakhawat Hossin</h3>
                <p className="text-style">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam, suscipit deleniti! Pariatur temporibus omnis minima!
                </p>
                <button className="btn btn-style px-3 ms-auto">
                  <FontAwesomeIcon icon={faArrowRight} /> Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
