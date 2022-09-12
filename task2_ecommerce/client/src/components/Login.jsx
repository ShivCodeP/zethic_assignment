import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  loginUserError,
  loginUserLoading,
  loginUserSuccess,
} from "../features/Auth/action";
import { baseUrl } from "../utils/baseUrl";
import { savetoken } from "../utils/cookieStorage";
import { toast } from "react-toastify";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUserLoading());
    fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.token) {
          savetoken(res.token);
          dispatch(loginUserSuccess());
          toast.success("Successfully login");
          navigate(-1);
        }
        else {
          toast.error(res.message);
        }
      })
      .catch((err) => {
        dispatch(loginUserError());
        toast.error(err.message);
      });
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
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          gap: "20px",
        }}
      >
        <input
          type="email"
          placeholder=" Email ..."
          onChange={(e) => setData({ ...data, email: e.target.value })}
          style={{ height: "30px", borderRadius: "5px" }}
        />
        <input
          type="password"
          placeholder=" Password ..."
          onChange={(e) => setData({ ...data, password: e.target.value })}
          style={{ height: "30px", borderRadius: "5px" }}
        />
        <input
          type="submit"
          value="Login"
          style={{
            height: "30px",
            borderRadius: "5px",
            width: "80px",
            margin: "auto",
          }}
        />
      </form>
      <Link to="/register">Create a account</Link>
    </div>
  );
};

export default Login;
