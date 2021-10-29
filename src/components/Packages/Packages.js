import React, { useEffect, useState } from "react";
import Package from "../Package/Package";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
      });
  }, []);
  return (
    <div className="container">
      <div id="services">
        <h2 className="text-primary mt-5">Our services</h2>
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
