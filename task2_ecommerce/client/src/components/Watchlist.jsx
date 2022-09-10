import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../utils/baseUrl";
import {
  addProductSuccess,
  addProductError,
  addProductLoading,
} from "../features/Product/action";
import { toast } from "react-toastify";
import { getToken } from "../utils/cookieStorage";
import WatchlistBox from "./WatchlistBox";
import { useNavigate } from "react-router-dom";

const Watchlist = () => {
  const { watchlist,order, error, loading } = useSelector(
    (state) => state.productState
  );
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [products,setProducts] = useState("");

  useEffect(() => {
    dispatch(addProductLoading());
    fetch(`${baseUrl}/api/user/cart`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(addProductSuccess(res));
        var t = res.reduce((sum,e) => sum+ +(e.price),0);
        var pro = [];
        watchlist.forEach(({_id}) => {
            pro.push(_id)
        });
        setTotal(t)
        setProducts(pro.join(","))
      })
      .catch((err) => toast.error(err.message));
  }, []);

  const navigate = useNavigate()

  return (
    <div style={{display:"flex",justifyContent:"space-around",marginTop:"10vh"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"20px",width:"60%"}}>
        {watchlist.map((e) => (
         <WatchlistBox {...e} />
        ))}
      </div>
      <div>
        <div style={{boxShadow:"5px 5px 20px gray",padding:"20px"}}>
          <p>
            <strong>Total Product: </strong>
            {watchlist.length}
          </p>
          <p>
            <strong>Total Price: </strong>
            {total}
          </p>
          <button style={{ width: "100px", height: "30px" }} onClick={() => navigate(`/checkout?products=${products}&total=${total}`)}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
