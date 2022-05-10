import React, { useState } from "react";
import "animate.css";
import axios from "axios";
import base_url from "../api/bootapi";
import Alert from "./Alert";
import { Link } from "react-router-dom";
import LinkSent from "./LinkSent";
import { toast,ToastContainer } from "react-toastify";

export default function ForgetPassword1() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  
  const getOtp=(emailId)=>{
    sessionStorage.setItem("eId",emailId)
    axios.get(`${base_url}/signin/resetpassword?userEmail=${emailId}`).then(
        (response)=>{
            console.log(response.data);
            console.log("success!")
            showAlert("Password and Confirm Password donot match !", "Success");
            // toast.success("Reset link sent !")
          },
        (error)=>
        {   
            console.log(error);
            console.log("Error!")
        }
    );
} ;

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
       <LinkSent alert={alert} />
      </form>
    </>
  );
}
