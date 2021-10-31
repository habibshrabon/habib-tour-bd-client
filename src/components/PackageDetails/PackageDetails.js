/* eslint-disable no-restricted-globals */
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const PackageDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch(`https://frightful-spirit-35719.herokuapp.com/packages/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  // const onSubmit = (data) => {
  //   axios
  //     .post("https://frightful-spirit-35719.herokuapp.com/orders", data)
  //     .then((res) => {
  //       if (res.data.insertedId) {
  //         confirm("You are Submitted an ordered!!");
  //         reset();
  //       }
  //     });
  // };
  const onSubmit = (userInfo) => {
    const eventDetails = details;
    userInfo.order = eventDetails;

    fetch("https://frightful-spirit-35719.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Event Confirmed Successfully");
          reset();
        }
      });
  };

  return (
    <div className="container">
      <h2 className="my-5 text-info text-center">Our Package Details</h2>
      {/* <div className="card my-3 shadow">
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
      </div> */}
      <div className="card mb-3 max-width">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={details.img}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{details.name}</h5>
              <p className="card-text">{details.description}</p>
              <h6>Package Price: BDT {details.price}</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="add-package mt-5 form-bg">
        <h2 className="text-center">Booking Packages Form</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-center box-shadow mb-5 mt-5"
        >
          <input
            {...register("name", { required: true })}
            value={user.displayName}
          />
          <input
            {...register("email", { required: true })}
            value={user.email}
          />
          <input
            {...register("phone", { required: true })}
            placeholder="Phone Number"
          />
          <input
            {...register("address", { required: true })}
            placeholder="Address"
          />

          <input className="style" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default PackageDetails;
