import React from "react";
import dubai from "../../images/dubai.jpg";
import austria from "../../images/austria.jpg";
import egypt from "../../images/egypt.jpg";
import chaina from "../../images/chaina.jpg";
import turkey from "../../images/turkey.jpg";

const MoreTravels = () => {
  return (
    <div>
      <section className="container">
        <h2 className="text-center fw-bold">TOP OUR PACKAGES</h2>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={dubai} alt="" />
          </div>
          <div className="col-md-6">
            <div className="col-md-6 d-flex">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <img className="img-fluid" src={austria} alt="" />
                </div>
                <div className="col-md-6">
                  <img className="img-fluid" src={egypt} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <img className="img-fluid" src={chaina} alt="" />
                </div>
                <div className="col-md-6">
                  <img className="img-fluid" src={turkey} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreTravels;
