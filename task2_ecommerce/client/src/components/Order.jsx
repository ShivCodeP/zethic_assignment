import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutProductSuccess } from "../features/Product/action";
import { baseUrl } from "../utils/baseUrl";
import { getToken } from "../utils/cookieStorage";
import WatchlistBox from "./WatchlistBox";

const Order = () => {
  const dispatch = useDispatch();
  const { order, loading } = useSelector((state) => state.productState);

  useEffect(() => {
    fetch(`${baseUrl}/api/checkout`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const or = [];
        res.forEach(({ products }) => {
          or.push(...products);
        });
        dispatch(checkoutProductSuccess(or));
      });
  }, []);

  return (
    !loading && (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "60%",
          }}
        >
          {order.map((e) => (
            <WatchlistBox {...e} />
          ))}
        </div>
      </div>
    )
  );
};

export default Order;
