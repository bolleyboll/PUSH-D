import React, { useState } from "react";
import "animate.css";
import axios from "axios";
import base_url from "../api/bootapi";
import Alert from "./Alert";
import { Link } from "react-router-dom";
import LinkSent from "./LinkSent";
import { toast,ToastContainer } from "react-toastify";
import PassChanged from "./PassChanged";
import PassConPassMatch from "./PassConPassMatch";
import RegError from "./RegError";


export default function EnterFpd() {
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
      
  const getOtp=(emailId)=>{
    axios.post(`${base_url}/signin/resetpassword`,{email:emailId,newpassword:document.getElementById("newPassword").value,token:document.getElementById("token").value}).then(
        (response)=>{
            if(document.getElementById("newPassword").value!=document.getElementById("newConfirmPassword").value){
                setAlert(null);
                setAlert2(null);
                showAlert1("Password and Confirm Password donot match !", "Success");
      
            }else{
            console.log(response.data);
            console.log("success!")
            setAlert1(null)
            setAlert2(null)
            showAlert("Password and Confirm Password donot match !", "Success");
            //toast.success("Reset link sent !")
            }
          },
        (error)=>
        {   
            console.log(error);
            console.log("Error!")
            setAlert1(null);
                setAlert(null);
                showAlert2("Password and Confirm Password donot match !", "Success");
      
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
          </label>
          <input
            id="newPassword"
            type="password"
            placeholder="Enter Password"
            className="form-control shadow rounded"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mx-5">
          <label htmlFor="exampleInputEmail1" className="form-label mx-2 my-2">
          </label>
          <input
            id="newConfirmPassword"
            type="password"
            placeholder="Re-enter Password"
            className="form-control shadow rounded"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mx-5">
          <label htmlFor="exampleInputEmail1" className="form-label mx-2 my-2">
          </label>
          <input
            id="token"
            type="text"
            placeholder="Enter token"
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
          onClick={()=>{getOtp(sessionStorage.getItem("eId"))}}
        >
          Submit
        </button>
        {/* <div style={{color:'red'}} className="text-center">{err}</div> */}
       <PassChanged alert={alert}/>
       <PassConPassMatch alert={alert1}></PassConPassMatch>
          <RegError alert={alert2}></RegError>
        </form>
    </>
  );
}
