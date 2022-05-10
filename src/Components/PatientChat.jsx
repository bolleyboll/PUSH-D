import "animate.css";

import React, { useState } from "react";
import base_url from "../api/bootapi";
import UserService from "../Service/UserService";
import "./DocHome.css";
import axios from "axios";

class PatientChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      chats:[]
    };
  }

  componentDidMount() {
    UserService.getPatient().then((response) => {
      this.setState({ patients: response.data });
    });
    UserService.getChats().then((response) => {
      console.log(response.data);
      this.setState({ chats: response.data });
    });
    
  }

  render() {
    const sendMessage = (username) => {
      console.log({senderId:username,receiverId:document.getElementById("doctorId").value,message:document.getElementById("msg").value});
      axios.post(`${base_url}/chat/save`,{id:Math.floor(Math.random() * 1000),senderId:username,receiverId:document.getElementById("doctorId").value,message:document.getElementById("msg").value}).then((response) => {
        console.log("message sent")  
      });
    };
    if( this.state.patients === undefined || this.state.patients.doctor === undefined || this.state.patients.doctor.specialist === undefined) {
        return <div>Loading...</div>
    }
     return (
      <>
                <table className="table" style={{width:"50%"}}>
                  <thead>
                    <tr>
                      <th>Sender Id</th>
                      <th>Message</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.chats.map((chat) => (
                      <>
                        <tr className="accordion-toggle">
                          <td>{chat.senderId}</td>
                          <td>{chat.message}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
        
        <form id="chat-pat-form" className="shadow text-center my-5" style={{width:"30%",marginLeft:"60%",marginRight:"10%"}}>
        <div className="mx-5">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label mx-2 my-3 fw-bold"
            >
            </label>
            <select
              id="doctorId"
              className="form-control shadow rounded"
              aria-label="Default select example"
              required
            >
              <option defaultValue="Select role">
                Select doctor
              </option>
              <option value={this.state.patients.doctor.username} selected>{this.state.patients.doctor.username}</option>
            </select>
          </div>
          <div className="mx-5">
          <label
              htmlFor="exampleInputPassword1"
              className="form-label mx-2 my-3 fw-bold"
            >
            </label>
            
            <textarea
              type="text"
              className="form-control shadow rounded"
              id="msg"
              placeholder="Enter your message"
            />
          </div>
          
          <button type="button" className="btn btn-primary my-3" onClick={()=>{sendMessage(sessionStorage.getItem("username"));
        document.getElementById("chat-pat-form").reset()}}>
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default PatientChat;
