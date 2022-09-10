import React from "react";

const WatchlistBox = ({ _id, name, img1, description, rating, price }) => {

  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        width: "100%",
        textAlign: "start",
        boxShadow: "5px 5px 5px gray",
        padding: "20px",
        gap:"10px"
      }}
    >
      <img src={img1} alt="img1.png" width="30%" />
      <div style={{padding:"20px"}}>
      <p>
        <strong>Rating: </strong>
        {rating}
      </p>
      <h3>{name}</h3>
      <p>
        <strong>Price:</strong> {price}
      </p>
      </div>
    </div>
  );
};

export default WatchlistBox;
