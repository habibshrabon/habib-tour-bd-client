import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Package.css";

const Package = (props) => {
  const { _id, name, img } = props.package;
  return (
    <>
      <div className="col-md-4 mb-3 ">
        <div className="card h-100 card-bg shadow img-style">
          <img
            src={img}
            style={{ height: "275px" }}
            className="card-img-top justify-content-center align-items-center img-fluid"
            alt="img"
          />
          <div className="card-body d-flex px-2">
            <h3 className="card-title text-center">{name}</h3>
            <Link to={`/packageDetails/${_id}`}>
              <button className="btn style px-3 ms-auto">
                <FontAwesomeIcon icon={faArrowRight} /> BOOK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
