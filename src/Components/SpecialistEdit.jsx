import React, { useState } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import Alert from "./Alert";
import PassConPassMatch from "./PassConPassMatch";
import RegError from "./RegError";
import RegSuccess from "./RegSuccess";
export default function Join() {
  const [loginData, setLoginData] = useState({});
  const [alert, setAlert] = useState(null);
  const [alert1, setAlert1] = useState(null);
  const [alert2, setAlert2] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const showAlert1 = (message, type) => {
    setAlert1({
      msg: message,
      type: type,
    });
  };
  const showAlert2 = (message, type) => {
    setAlert2({
      msg: message,
      type: type,
    });
  };
  let value1 = Math.floor(Math.random() * 1000);
  const handleForm = (e) => {
    if (loginData.password == loginData.confirmPassword) {
      console.log(loginData);
      postDataToServer(loginData);
      e.preventDefault();
    } else {
      console.log("Error!!!!!");
      setAlert2(null);
      setAlert1(null);
      showAlert("Password and Confirm Password donot match !", "Success");
      e.preventDefault();
    }
  };
  const [err, setErr] = useState("");
  const postDataToServer = (data) => {
    axios.put(`${base_url}/specialist/update`, data).then(
      (response) => {
        console.log(response.data);
        if(response.data==="USER ALREADY EXISTS"){
          console.log("Error!!!!!");
          setAlert(null);
          setAlert1(null);
          showAlert2("Error !", "Success");
        }else{
        console.log("success!");
        setAlert(null);
        setAlert2(null);
        showAlert1("Successfully Edited you can now login!", "Success");
      }},
      (error) => {
        console.log(error);
        console.log("error!");
        setAlert(null);
        setAlert1(null);
        showAlert2("Error !", "Success");
      }
    );
    window.location.reload(false);
  };
  return (
    <>
      <div style={{ marginLeft: "5%", marginRight: "5%" }}>
        <form
          onSubmit={handleForm}
          className="rounded my-4 mx-5 pt-2 shadow"
          style={{ backgroundColor: "#89C7E7" }}
        >
          <h3 className="pt-5 fs-1 text-center">Edit Specialist</h3>
          <div className="mx-5">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Enter Specialist's Username
            </label>
            <input
              onChange={(e) => {
                setLoginData({ ...loginData, username: e.target.value });
              }}
              type="text"
              className="form-control shadow rounded"
              placeholder="Enter username"
              id="username"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mx-5">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Enter a Password
            </label>
            <input
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
              type="password"
              className="form-control shadow rounded"
              placeholder="Enter password"
              id="password"
              required
            />
          </div>
          <div className="mx-5">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Confirm Password
            </label>
            <input
              type="password"
              onChange={(e) => {
                setLoginData({ ...loginData, confirmPassword: e.target.value });
              }}
              className="form-control shadow rounded"
              placeholder="Re-enter password"
              id="confirmPassword"
              required
            />
          </div>
          <div className="mx-5">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Enter Specialist's name
            </label>
            <input
              onChange={(e) => {
                setLoginData({ ...loginData, name: e.target.value });
              }}
              type="text"
              className="form-control shadow rounded"
              placeholder="Enter name"
              id="name"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mx-5">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Enter Specialist's Email Address
            </label>
            <input
              type="email"
              onChange={(e) => {
                setLoginData({ 
                    ...loginData, 
                    email: e.target.value, 
                    specID: value1
                    });
              }}
              className="form-control shadow rounded"
              placeholder="alex@gmail.com"
              id="email"
              aria-describedby="emailHelp"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg mx-5 my-3 shadow"
            style={{
              borderRadius: "12px",
              backgroundColor: "#00ADEF",
              borderColor: "#00ADEF",
            }}
          >
            Submit
          </button>
          <PassConPassMatch alert={alert}></PassConPassMatch>
          <RegError alert={alert2}></RegError>
          <RegSuccess alert={alert1}></RegSuccess>
        </form>
      </div>
    </>
  );
}
