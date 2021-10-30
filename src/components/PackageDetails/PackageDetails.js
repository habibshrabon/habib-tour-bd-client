import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

const PackageDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/packages/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div className="container">
      <h2 className="my-5 text-info text-center">Our Package Details</h2>
      <div className="card my-3">
        <img
          style={{ height: "430px" }}
          src={details.img}
          class="card-img-top img-style"
          alt="..."
        />
        <div className="card-body  text-center">
          <h5 className="card-title">{details.name}</h5>
          <p className="card-text">{details.description}</p>
          <h6>Package Price: BDT {details.price}</h6>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
