import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Package = () => {
  return (
    <>
      <div className="col-md-4 mb-3 ">
        <div className="card h-100 card-bg opacity box-shadow">
          <img
            src=""
            style={{ height: "275px" }}
            className="card-img-top justify-content-center align-items-center img-fluid"
            alt="sakib"
          />
          <div className="card-body">
            <h3 className="card-title text-center">sakib</h3>
            <p className="text-style">sakib</p>
            <button className="btn btn-style px-3 ms-auto">
              <FontAwesomeIcon icon={faArrowRight} /> Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
