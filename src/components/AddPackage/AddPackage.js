import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddPackage.css";

const AddPackage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://frightful-spirit-35719.herokuapp.com/packages", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added Successfully");
          reset();
        }
      });
  };

  return (
    <div className="add-package">
      <h2 className="text-center">Please Add Package</h2>
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

export default AddPackage;
