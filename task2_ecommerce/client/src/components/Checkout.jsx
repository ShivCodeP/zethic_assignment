import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/baseUrl";
import { getToken } from "../utils/cookieStorage";

const Checkout = () => {
  const path = useLocation().search;
  const products = new URLSearchParams(path).get("products");
  const total = new URLSearchParams(path).get("total");

  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault()
    fetch(`${baseUrl}/api/checkout?payment_status=true`,{
        method:"POST",
        body: JSON.stringify({
            products: products.split(","),
            ship_address:address
        }),
        headers: {
            'content-type': "application/json",
            authorization: `Bearer ${getToken()}`
        }
    })
    .then(res => res.json())
    .then(res => {
        toast.success("Payment Successful");
        navigate("/");
    })
    .catch(err => toast.error("Something went wrong"))
  };

  return (
    <div
      style={{
        width: "30%",
        margin: "auto",
        marginTop: "10vh",
        boxShadow: "2px 2px 5px",
        padding: "20px",
      }}
    >
      <p>
        <strong>Total bill: </strong>
        {total}
      </p>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          gap: "20px",
        }}
        onSubmit={handlePayment}
      >
        <input
          type="text"
          placeholder="Shipping Address"
          onChange={(e) => setAddress(e.target.value)}
          style={{ height: "30px", borderRadius: "5px" }}
        />
        <button
          type="submit"
          style={{ width: "150px", height: "30px",margin:"auto" }}
        >
          Make Payment
        </button>
      </form>
    </div>
  );
};

export default Checkout;
