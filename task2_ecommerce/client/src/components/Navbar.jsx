import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { LogoutUser } from "../features/Auth/action";

const Navbar = () => {
  const { isLogin } = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isLogin) {
      dispatch(LogoutUser());
      return navigate("/");
    }

    return navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "20px",
        paddingRight: "20px",
        alignItems: "center",
        borderBottom: "2px solid gray",
      }}
    >
      <Link to="/">
        <h2>
          E-<span style={{ color: "red" }}>Com</span>
        </h2>
      </Link>
      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <Link to="/order">Order</Link>
        <div onClick={handleLogin} style={{cursor:"pointer"}}>{isLogin ? "Logout" : "Login"}</div>
        <Link to="/watchlist">
          <AddShoppingCartIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
