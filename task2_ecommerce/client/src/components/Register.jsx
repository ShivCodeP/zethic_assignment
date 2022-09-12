import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  registerUserError,
  registerUserLoading,
  registerUserSuccess,
} from "../features/Auth/action";
import { baseUrl } from "../utils/baseUrl";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
    confirmpassword: "",
  });

  const { isRegister, loading, error } = useSelector(
    (state) => state.authState
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserLoading());
    fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(registerUserSuccess());
        toast.success(res.message);
        navigate("/login");
      })
      .catch((err) => {
        dispatch(registerUserError());
        toast.error();
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
      <h1>Register</h1>
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
          type="text"
          placeholder=" Name ..."
          onChange={(e) => setData({ ...data, name: e.target.value })}
          style={{ height: "30px", borderRadius: "5px" }}
        />
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
          type="password"
          placeholder=" Confirm Password ..."
          onChange={(e) =>
            setData({ ...data, confirmpassword: e.target.value })
          }
          style={{ height: "30px", borderRadius: "5px" }}
        />
        <input
          type="submit"
          value="Register"
          style={{
            height: "30px",
            borderRadius: "5px",
            width: "80px",
            margin: "auto",
          }}
        />
      </form>
      <Link to="/login">Already have an account?</Link>
    </div>
  );
};

export default Register;
