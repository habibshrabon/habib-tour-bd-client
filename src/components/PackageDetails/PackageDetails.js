import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const PackageDetails = () => {
  const history = useHistory();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/orders", data).then((res) => {
      if (res.data.insertedId) {
        history.push("/myOrders");
        reset();
      }
    });
  };

  return (
    <div className="add-package">
      <h2 className="text-center">Booking</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="Price" />
        <input {...register("img")} placeholder="Image" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default PackageDetails;
