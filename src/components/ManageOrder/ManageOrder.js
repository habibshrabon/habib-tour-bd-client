import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ManageOrder = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch(`https://frightful-spirit-35719.herokuapp.com/packages`)
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  const handelDelete = (id) => {
    const url = `https://frightful-spirit-35719.herokuapp.com/packages/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("delete count successfully");
          const remaining = packages.filter((event) => event._id !== id);
          setPackages(remaining);
        }
      });
  };
  return (
    <div>
      <h2>This is the manageOrder</h2>
      {packages.map((event) => (
        <div key={event._id}>
          <h3>{event.name}</h3>
          <button onClick={() => handelDelete(event._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageOrder;
