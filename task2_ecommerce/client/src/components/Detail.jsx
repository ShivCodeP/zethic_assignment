import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/baseUrl";
import {
  addProductError,
  addProductLoading,
  addProductSuccess,
} from "../features/Product/action";
import { getToken } from "../utils/cookieStorage";

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const { watchlist, loading, error } = useSelector(
    (state) => state.productState
  );
  const { isAuth, isLogin } = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${baseUrl}/api/user/product/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  const handleCheckout = () => {
    navigate(`/checkout?products=${params.id}&total=${data.price}`);
  };

  const handleCart = () => {
    if (!(isLogin && isAuth)) {
      navigate("/login");
    }
    dispatch(addProductLoading());
    fetch(`${baseUrl}/api/user/cart/${data._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(addProductSuccess(res));
        toast.success("Product added to cart");
      })
      .catch((err) => {
        toast.error(err.message);
        dispatch(addProductError());
      });
  };

  return (
    !isLoading && (
      <div style={{ margin: "auto", marginTop: "10vh", width: "95%" }}>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <img src={data.img1} alt="img1.png" style={{ width: "23%" }} />
          <img src={data.img2} alt="img2.png" style={{ width: "23%" }} />
          <img src={data.img3} alt="img3.png" style={{ width: "23%" }} />
          <img src={data.img4} alt="img4.png" style={{ width: "23%" }} />
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              textAlign: "start",
            }}
          >
            <h2>{data.name}</h2>
            <p>
              <strong>Rating: </strong>
              {data.rating}
            </p>
            <p>{data.description}</p>
            <p>
              <strong>Price: </strong>
              {data.price}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              style={{ width: "100px", height: "30px" }}
              onClick={handleCheckout}
            >
              Buy Now
            </button>
            <button
              style={{ width: "100px", height: "30px" }}
              onClick={handleCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Detail;
