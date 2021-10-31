import React, { useEffect, useState } from "react";
import Package from "../Package/Package";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://frightful-spirit-35719.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
      });
  }, []);
  return (
    <div className="container">
      <div className="text-center py-5">
        <h2 className="mt-5 fw-bold">Our services</h2>
        <p>
          Explore World, Customize Tour Packages, Lowest Rates, Guaranteed
          Services.
        </p>
        <hr />
        <div className="row">
          {packages.map((event) => (
            <Package key={event._id} package={event}></Package>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
