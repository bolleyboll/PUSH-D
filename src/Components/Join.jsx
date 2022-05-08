import React, { useState } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
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
  let value1 = Math.floor(Math.random()*1000);
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
    axios.post(`${base_url}/patient/register`, data).then(
      (response) => {
        console.log(response.data);
        console.log("success!");
        setAlert(null);
        setAlert2(null);
        showAlert1("Successfully Registered you can now login!", "Success");
      },
      (error) => {
        console.log(error);
        console.log("error!");
        setAlert(null);
        setAlert1(null);
        showAlert2("Error !", "Success");
      }
    );
  };
  return (
    <>
      <form
        onSubmit={handleForm}
        className="rounded float-end my-4 mx-5 text-center animate__animated animate__fadeInUp shadow p-3 mb-5 rounded"
        style={{ backgroundColor: "#89C7E7" }}
      >
        <div className="mx-5">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input
            onChange={(e) => {
              setLoginData({ ...loginData, username: e.target.value });
            }}
            type="text"
            className="form-control shadow rounded"
            placeholder="Enter username"
            id="username"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mx-5">
          <label htmlFor="exampleInputPassword1" className="form-label"></label>
          <input
            onChange={(e) => {
              setLoginData({ ...loginData, password: e.target.value });
            }}
            type="password"
            className="form-control shadow rounded"
            placeholder="Enter password"
            id="password"
          />
        </div>
        <div className="mx-5">
          <label htmlFor="exampleInputPassword1" className="form-label"></label>
          <input
            type="password"
            onChange={(e) => {
              setLoginData({ ...loginData, confirmPassword: e.target.value });
            }}
            className="form-control shadow rounded"
            placeholder="Re-enter password"
            id="confirmPassword"
          />
        </div>
        <div className="mx-5">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input
            onChange={(e) => {
              setLoginData({ ...loginData, name: e.target.value });
            }}
            type="text"
            className="form-control shadow rounded"
            placeholder="Enter name"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mx-5">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input
            type="email"
            onChange={(e) => {
              setLoginData({ ...loginData, email: e.target.value });
            }}
            className="form-control shadow rounded"
            placeholder="Enter Email ID"
            id="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mx-5">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input
            type="number"
            onChange={(e) => {
              setLoginData({ ...loginData, mobile: e.target.value });
            }}
            className="form-control shadow rounded"
            placeholder="Enter mobile no"
            id="mobile"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mx-5">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input
            type="number"
            onChange={(e) => {
              setLoginData({ ...loginData, age: e.target.value });
            }}
            className="form-control shadow rounded"
            placeholder="Enter age"
            id="age"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mx-5">
          <label htmlFor="exampleInputPassword1" className="form-label"></label>
          <select
            id="gender"
            onChange={(e) => {
              setLoginData({ ...loginData, gender: e.target.value });
            }}
            className="form-control shadow rounded"
            aria-label="Default select example"
          >
            <option defaultValue="Select role">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mx-5">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input
            type="date"
            onChange={(e) => {
              setLoginData({ ...loginData, dob: e.target.value });
            }}
            className="form-control shadow rounded"
            placeholder="Enter dob"
            id="dob"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mx-5">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input
            type="text"
            onChange={(e) => {
              setLoginData({ ...loginData, city: e.target.value });
            }}
            className="form-control shadow rounded"
            placeholder="Enter city"
            id="city"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mx-5">
          <label htmlFor="exampleInputPassword1" className="form-label"></label>
          <select
            id="maritalStatus"
            onChange={(e) => {
              setLoginData({ ...loginData, maritalStatus: e.target.value });
            }}
            className="form-control shadow rounded"
            aria-label="Default select example"
          >
            <option defaultValue="Select marital status">Select marital status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
        </div>
        <div className="mx-5">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input
            type="text"
            onChange={(e) => {
              setLoginData({ ...loginData, occupation: e.target.value });
            }}
            className="form-control shadow rounded"
            placeholder="Enter occupation"
            id="occupation"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mx-5">
          <label htmlFor="exampleInputPassword1" className="form-label"></label>
          <select
            id="education"
            onChange={(e) => {
              setLoginData({ ...loginData, education: e.target.value,lastLogin: "1997-11-30", isActive: "false", totalSections: "1, 2, 3, 4, 5", completedSections: "", sectionOrder: "1, 2, 3, 4, 5",patientID: value1, doctor: null, selfDiagnosis: "idk", soughtProfessionalHelp: "true", currentSeekingHelp: "no", registrationForm: "abc" });
            }}
            className="form-control shadow rounded"
            aria-label="Default select example"
          >
            <option defaultValue="Select marital status">Select education</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="graduate">Graduate</option>
            <option value="postgraduate">Post graduate</option>
            <option value="phd">Phd</option>
          </select>
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
        <PassConPassMatch alert={alert}></PassConPassMatch>
      <RegError alert={alert2}></RegError>
      <RegSuccess alert={alert1}></RegSuccess>
      </form>
    </>
  );
}
