import React, { useState } from "react";
import "animate.css";
import axios from "axios";
import base_url from "../api/bootapi";
import Alert from "./Alert";
import { Link } from "react-router-dom";

export default function ForgetPassword1() {

  const getOtp=(email)=>{
    axios.get(`${base_url}/signin/resetpassword?userEmail=${email}`).then( //this is a promise for what to do if depend on response and on error
        (response)=>{
            //success
           // console.log(response);
            console.log(response.data);
            console.log("success!")
            // toast.success("Courses has been laoded")
            // setCourses(response.data);
        },
        (error)=>
        {   //for errror
            console.log(error);
            // toast.error("Something Went wrong")
        }
    );
} ;


//   const postDataToServer = (data) => {
//     sessionStorage.setItem("username",data.username)
//     axios.post(`${base_url}/${data.role}/signin`, data).then(
//       (response) => {
//         sessionStorage.setItem("userName", response.data);
//         if (response.data === "Username or Password don't match!") {
//           showAlert("Invalid Id/Password", "Success");
//         } else if (data.role === "patient") {
//           {
//             window.open("/patDash", "_self");
//           }
//         } else if (data.role === "doctor") {
//           {
//             window.open("/docDash", "_self");
//           }
//         } else if (data.role === "specialist") {
//           {
//             window.open("/spDash", "_self");
//           }
//         } else if (data.role === "admin") {
//           {
//             window.open("/adminDash", "_self");
//           }
//         }
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   };
  return (
    <>
      <img
        className="rounded float-start"
        src="home_active_minds.png"
        style={{ width: "60%", height: "500px" }}
      />
      <form
        className="rounded float-end my-4 mx-5 animate__animated animate__fadeInUp shadow p-3 mb-5 rounded my-5"
        style={{ backgroundColor: "#89C7E7", width: "25%", height: "70%" }}
      >
        <div className="mx-5">
          <label htmlFor="exampleInputEmail1" className="form-label mx-2 my-2">
            Enter E-Mail
          </label>
          <input
            id="userEmail"
            type="text"
            placeholder="Your Username"
            className="form-control shadow rounded"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary mx-5 my-3 shadow"
          style={{
            borderRadius: "12px",
            backgroundColor: "#00ADEF",
            borderColor: "#00ADEF",
          }}
          onClick={()=>{getOtp(document.getElementById("userEmail").value)}}
        >
          Submit
        </button>
        {/* <div style={{color:'red'}} className="text-center">{err}</div> */}
        {/* <Alert alert={alert} /> */}
      </form>
    </>
  );
}
