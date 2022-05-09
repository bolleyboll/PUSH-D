import React, { useState } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import Alert from "./Alert";
import PassConPassMatch from "./PassConPassMatch";
import RegError from "./RegError";
import RegSuccess from "./RegSuccess";
export default function PatientEditProfile() {
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
    axios.put(`${base_url}/patient/update`, data).then(
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
        showAlert1("Profile edited", "Success");
      }},
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
      <div style={{ marginLeft: "20%", marginRight: "20%" }}>
        <form
          onSubmit={handleForm}
          className="rounded my-4 mx-5 pt-2 shadow"
          style={{ backgroundColor: "#89C7E7" }}
        >
          <h3 className="pt-5 fs-1 text-center">Edit Patient</h3>
          <div className="mx-5">
            <label
              for="exampleInputEmail1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Enter a Username
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
              for="exampleInputPassword1"
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
              for="exampleInputPassword1"
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
              for="exampleInputEmail1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Enter your name
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
              for="exampleInputEmail1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Enter you Email Address
            </label>
            <input
              type="email"
              onChange={(e) => {
                setLoginData({ ...loginData, email: e.target.value });
              }}
              className="form-control shadow rounded"
              placeholder="alex@gmail.com"
              id="email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mx-5">
            <label
              for="exampleInputEmail1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Enter your Mobile Number
            </label>
            <input
              type="text"
              onChange={(e) => {
                setLoginData({ ...loginData, mobile: e.target.value });
              }}
              className="form-control shadow rounded"
              placeholder="Enter mobile no"
              id="mobile"
              aria-describedby="emailHelp"
              minLength="10"
              pattern="[6789][0-9]{9}"
              title="A valid mobile number, must be 10 digits long."
              required
            />
          </div>
          <div className="mx-5">
            <label
              for="exampleInputEmail1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Enter your Age
            </label>
            <input
              type="text"
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
            <label
              for="exampleInputPassword1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Select your Gender
            </label>
            <select
              id="gender"
              onChange={(e) => {
                setLoginData({ ...loginData, gender: e.target.value });
              }}
              className="form-control shadow rounded"
              aria-label="Default select example"
              required
            >
              <option defaultValue="Select role">
                Select gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mx-5">
            <label
              for="exampleInputEmail1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Enter your Date of Birth
            </label>
            <input
              type="date"
              onChange={(e) => {
                setLoginData({ ...loginData, dob: e.target.value });
              }}
              className="form-control shadow rounded"
              placeholder="Enter dob"
              id="dob"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mx-5">
            <label
              for="exampleInputEmail1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Enter your City
            </label>
            <input
              type="text"
              onChange={(e) => {
                setLoginData({ ...loginData, city: e.target.value });
              }}
              className="form-control shadow rounded"
              placeholder="Enter city"
              id="city"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mx-5">
            <label
              for="exampleInputPassword1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Select Your Marital Status
            </label>
            <select
              id="maritalStatus"
              onChange={(e) => {
                setLoginData({ ...loginData, maritalStatus: e.target.value });
              }}
              className="form-control shadow rounded"
              aria-label="Default select example"
              required
            >
              <option defaultValue="Select marital status">
                Select marital status
              </option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          </div>
          <div className="mx-5">
            <label
              for="exampleInputEmail1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Enter your Occupation
            </label>
            <input
              type="text"
              onChange={(e) => {
                setLoginData({ ...loginData, occupation: e.target.value });
              }}
              className="form-control shadow rounded"
              placeholder="Enter occupation"
              id="occupation"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mx-5">
            <label
              for="exampleInputPassword1"
              className="form-label mx-2 my-3 fw-bold"
            >
              Select the Highest Education you've received
            </label>
            <select
              id="education"
              onChange={(e) => {
                setLoginData({
                  ...loginData,
                  education: e.target.value,
                  lastLogin: "1997-11-30",
                  isActive: "false",
                  totalSections: "1, 2, 3, 4, 5",
                  completedSections: "",
                  sectionOrder: "1, 2, 3, 4, 5",
                  patientID: value1,
                  doctor: null,
                  selfDiagnosis: "idk",
                  soughtProfessionalHelp: "true",
                  currentSeekingHelp: "no",
                  registrationForm: "abc",
                });
              }}
              className="form-control shadow rounded"
              aria-label="Default select example"
              required
            >
              <option defaultValue="Select Highest Education">
                Select Highest Education
              </option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="graduate">Graduate</option>
              <option value="postgraduate">Post Graduate</option>
              <option value="phd">PhD</option>
            </select>
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
