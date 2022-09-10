import React from "react";
import { useNavigate } from "react-router-dom";

const ProductBox = ({ _id, name, img1, description, rating, price }) => {
  const navigate = useNavigate();

  const handleButton = (e) => {
    navigate(`/detail/${_id}`);
  };

  return (
    <div
      style={{
        boxSizing:"border-box",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        textAlign: "start",
        boxShadow: "5px 5px 10px gray",
        padding: "20px",
      }}
      onClick={handleButton}
    >
      <img src={img1} alt="img1.png" />
      <p>
        <strong>Rating: </strong>
        {rating}
      </p>
      <h3>{name}</h3>
      <p>
        <strong>Price:</strong> {price}
      </p>
      <button
        onClick={handleButton}
        style={{ width: "100px", margin: "auto", fontSize: "16px" }}
      >
        Detail
      </button>
    </div>
  );
};

export default ProductBox;
