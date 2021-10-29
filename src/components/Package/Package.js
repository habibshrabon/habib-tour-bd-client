import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Package.css";

const Package = (props) => {
  // console.log("data", props.package);
  const { _id, name, price, description, img } = props.package;
  return (
    <>
      <div className="col-md-4 mb-3 ">
        <div className="card h-100 card-bg opacity box-shadow img-style">
          <img
            src={img}
            style={{ height: "275px" }}
            className="card-img-top justify-content-center align-items-center img-fluid"
            alt="img"
          />
          <div className="card-body d-flex">
            <h3 className="card-title text-center">{name}</h3>
            {/* <p className="text-style">{description}</p> */}
            <button className="btn btn-warning px-3 ms-auto">
              <FontAwesomeIcon icon={faArrowRight} /> Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
