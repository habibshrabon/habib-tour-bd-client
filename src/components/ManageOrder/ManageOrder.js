/* eslint-disable no-restricted-globals */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { FiDollarSign } from "react-icons/fi";

const ManageOrder = () => {
  const { user } = useAuth();
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("https://frightful-spirit-35719.herokuapp.com/orders/")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    const url = `https://frightful-spirit-35719.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          confirm("You are deleting an ordered package!!");
          const remaining = allOrders.filter((event) => event._id !== id);
          setAllOrders(remaining);
        }
      });
  };

  return (
    <div className="bg-info py-5 user-orders">
      <Container>
        <h2 className="text-center pb-4">Manage your Booked Packages.</h2>

        {allOrders.map((order) => (
          <div
            className="card mb-3 mx-auto"
            style={{ maxWidth: "700px" }}
            key={order._id}
          >
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={order.order.img}
                  className="img-fluid p-2 rounded"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body text-start px-5 px-md-3">
                  <h4 className="card-title">{order.order.name}</h4>
                  <h5 className="fw-bold pb-2">
                    <FiDollarSign /> {order.order.price}
                  </h5>

                  <div className="d-flex">
                    <button className="btn btn-primary me-3">Approved</button>
                    <button
                      className="btn btn-danger "
                      onClick={() => handleDelete(order._id)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ManageOrder;
