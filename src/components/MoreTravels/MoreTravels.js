import React from "react";
import dubai from "../../images/dubai.jpg";
import austria from "../../images/austria.jpg";
import egypt from "../../images/egypt.jpg";
import chaina from "../../images/chaina.jpg";
import turkey from "../../images/turkey.jpg";

const MoreTravels = () => {
  return (
    <div className="container">
      <h2 className="text-center fw-bold">TOP OUR PACKAGES</h2>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src={dubai} alt="dubai" />
        </div>
        <div className="col-md-6">
          <div className="col-md-6 mb-3 d-flex">
            <img className="img-fluid" src={austria} alt="" />
            <img className="img-fluid mx-5" src={turkey} alt="" />
          </div>
          <div className="col-md-6 d-flex">
            <img className="img-fluid" src={egypt} alt="" />
            <img className="img-fluid mx-5" src={chaina} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreTravels;
