import React, { useState } from "react";
import "animate.css";
import axios from "axios";
import base_url from "../api/bootapi";
import Alert from "./Alert";
import { Link } from "react-router-dom";

export default function Login() {
  const [loginData, setLoginData] = useState({});
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const handleForm = (e) => {
    console.log(loginData);
    postDataToServer(loginData);
    e.preventDefault();
  };
  const postDataToServer = (data) => {
    sessionStorage.setItem("username",data.username)
    axios.post(`${base_url}/patient/signin/resetpassword`, data).then(
      (response) => {
        sessionStorage.setItem("userName", response.data);
        if (response.data === "Username or Password don't match!") {
          showAlert("Invalid Id/Password", "Success");
        } else if (data.role === "patient") {
          {
            window.open("/patDash", "_self");
          }
        } else if (data.role === "doctor") {
          {
            window.open("/docDash", "_self");
          }
        } else if (data.role === "specialist") {
          {
            window.open("/spDash", "_self");
          }
        } else if (data.role === "admin") {
          {
            window.open("/adminDash", "_self");
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <>
      <img
        className="rounded float-start"
        src="home_active_minds.png"
        style={{ width: "60%", height: "500px" }}
      />
      <form
        onSubmit={handleForm}
        className="rounded float-end my-4 mx-5 animate__animated animate__fadeInUp shadow p-3 mb-5 rounded my-5"
        style={{ backgroundColor: "#89C7E7", width: "25%", height: "70%" }}
      >
        <div className="mx-5">
          <label htmlFor="exampleInputEmail1" className="form-label mx-2 my-2">
            Enter your E-mail
          </label>
          <input
            id="email"
            onChange={(e) => {
              setLoginData({ ...loginData, email: e.target.value });
            }}
            type="text"
            placeholder="Your E-mail"
            className="form-control shadow rounded"
            aria-describedby="emailHelp"
          />
           <button
          type="submit"
          className="btn btn-primary mx-5 my-3 shadow"
          style={{
            borderRadius: "12px",
            backgroundColor: "#00ADEF",
            borderColor: "#00ADEF",
          }}
        >
          Submit
        </button>
        </div>
        <div className="mx-5">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label my-2 mx-2"
          >
            Enter new Password
          </label>
          <input
            id="password"
            onChange={(e) => {
              setLoginData({ ...loginData, newpassword: e.target.value });
            }}
            type="password"
            className="form-control shadow rounded"
            placeholder="Your Password"
          />
        </div>
        <div className="mx-5">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label my-2 mx-2"
          >
            Enter O.T.P 
          </label>
          <input
            id="otp"
            onChange={(e) => {
              setLoginData({ ...loginData, token: e.target.value });
            }}
            type="number"
            className="form-control shadow rounded"
            placeholder="Enter O.T.P"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-5 my-3 shadow"
          style={{
            borderRadius: "12px",
            backgroundColor: "#00ADEF",
            borderColor: "#00ADEF",
          }}
        >
          Submit
        </button>
        {/* <div style={{color:'red'}} className="text-center">{err}</div> */}
        <Alert alert={alert} />
      </form>
    </>
  );
}
