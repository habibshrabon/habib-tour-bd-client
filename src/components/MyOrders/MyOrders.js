import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

const MyOrders = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://frightful-spirit-35719.herokuapp.com/packages/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="container">
      <h2 className="my-5 text-info text-center">Our Package Details</h2>
      <div className="card my-3 shadow">
        <img
          style={{ height: "430px" }}
          src={details.img}
          className="card-img-top img-style"
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

export default MyOrders;
