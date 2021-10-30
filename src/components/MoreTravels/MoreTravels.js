import React from "react";
import dubai from "../../images/dubai.jpg";
import austria from "../../images/austria.jpg";
import egypt from "../../images/egypt.jpg";
import chaina from "../../images/chaina.jpg";
import turkey from "../../images/turkey.jpg";

const MoreTravels = () => {
  return (
    <div>
      <section className="container content-height">
        <h2 className="text-center py-5">TOP OUR PACKAGES</h2>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid p-5" src={dubai} alt="" />
          </div>
          <div className="col-md-3">
            <img className="img-fluid p-5" src={austria} alt="" />
          </div>
          <div className="col-md-3">
            <img className="img-fluid p-5" src={egypt} alt="" />
          </div>
          <div className="col-md-3">
            <img className="img-fluid p-5" src={chaina} alt="" />
          </div>
          <div className="col-md-3">
            <img className="img-fluid p-5" src={turkey} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreTravels;
