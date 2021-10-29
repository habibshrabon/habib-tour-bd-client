import React from "react";
import { useForm } from "react-hook-form";
import "./AddPackage.css";

const AddPackage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="add-package">
      <h2>Please Add Package</h2>
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
