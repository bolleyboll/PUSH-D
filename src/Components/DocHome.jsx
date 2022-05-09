import "animate.css";

import React, { useState } from "react";
import base_url from "../api/bootapi";
import UserService from "../Service/UserService";
import "./DocHome.css";
import axios from "axios";

class DocHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      specialists:[],
      chats:[]
    };
  }

  componentDidMount() {
    UserService.getPatients().then((response) => {
      this.setState({ patients: response.data });
    });
    UserService.getAllSpecialists().then((response) => {
      this.setState({ specialists: response.data });
    });
    UserService.getChats().then((response) => {
      console.log(response.data);
      this.setState({ chats: response.data });
    });
    
  }

  render() {
    const sendMessageS = (username) => {
      console.log({senderId:username,receiverId:document.getElementById("doctorId").value,message:document.getElementById("msg").value});
      axios.post(`${base_url}/chat/save`,{id:Math.floor(Math.random() * 1000),senderId:username,receiverId:document.getElementById("doctorId").value,message:document.getElementById("msg").value}).then((response) => {
        console.log("message sent")  
      });
    };
    const sendMessage = (username) => {
      console.log({senderId:username,receiverId:document.getElementById("dId").value,message:document.getElementById("ms").value});
      axios.post(`${base_url}/chat/save`,{id:Math.floor(Math.random() * 1000),senderId:username,receiverId:document.getElementById("dId").value,message:document.getElementById("ms").value}).then((response) => {
        console.log("message sent")  
      });
    };
    
    const restrictSection = (username) => {
      console.log(username)
      console.log(document.getElementById(`section${username}`).value)
      var sec=document.getElementById(`section${username}`).value
      axios
        .put(`${base_url}/doctor/restrictsection/${username}/${sec}`, {
        })
        .then((response) => {
          console.log("success!")
          window.open("/docDash","_self")
        });
    };
    const sectionOrder = (username) => {
      const str1 = document.getElementById(`firstSection${username}`).value;
      const str2 = str1.concat(
        ", ",
        document.getElementById(`secondSection${username}`).value,
        ", ",
        document.getElementById(`thirdSection${username}`).value,
        ", ",
        document.getElementById(`fourthSection${username}`).value,
        ", ",
        document.getElementById(`fifthSection${username}`).value
      );
      console.log(username);
      console.log(str2);
      axios
        .put(`${base_url}/doctor/sectionorder/${username}`, {  sectionOrder: str2 })
        .then((response) => {
          window.open("/docDash", "_self");
        });
    };
    return (
      <>
        <div className="container my-5 text-center">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">Patient Details</div>
              <div className="panel-body">
                <table className="table table-condensed table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Occupation</th>
                      <th>Age</th>
                      <th>Email</th>
                      <th>Section Order</th>
                      <th>Total Sections</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.patients.map((patient) => (
                      <>
                        <tr
                          data-bs-toggle="collapse"
                          data-bs-target={"#h" + patient.username}
                          className="accordion-toggle"
                        >
                          <td>{patient.name}</td>
                          <td>{patient.occupation}</td>
                          <td>{patient.age}</td>
                          <td>{patient.email}</td>
                          <td>{patient.sectionOrder}</td>
                          <td>{patient.totalSections}</td>
                        </tr>

                        <tr>
                          <td colSpan="12" className="hiddenRow">
                            <div
                              className="accordian-body collapse"
                              id={"h" + patient.username}
                            >
                              <table className="table table-warning">
                                <thead>
                                  <tr className="info">
                                    <th></th>
                                    <th></th>
                                    <th>Patient Id</th>
                                    <th>City</th>
                                    <th>DOB</th>
                                    <th>Education</th>
                                    <th>Marital Status</th>
                                    <th>LastLogin</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>

                                <tbody>
                                  <tr
                                    data-bs-toggle="collapse"
                                    className="accordion-toggle"
                                    data-bs-target="#demo10"
                                  >
                                    <td></td>
                                    <td></td>
                                    <td>{patient.patientID}</td>
                                    <td>{patient.city}</td>
                                    <td>{patient.dob}</td>
                                    <td>{patient.education}</td>
                                    <td>{patient.maritalStatus}</td>
                                    <td>{patient.lastLogin}</td>
                                    <td>
                                      <div
                                        className="accordion"
                                        id="accordionExample"
                                      >
                                        <div className="accordion-item">
                                          <h2
                                            className="accordion-header"
                                            id="headingOne"
                                          >
                                            <button
                                              className="accordion-button collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target={
                                                "#collapseOne" +
                                                patient.username
                                              }
                                              aria-expanded="false"
                                              aria-controls="collapseOne"
                                            >
                                              Change Section Order
                                            </button>
                                          </h2>
                                          <div
                                            id={
                                              "collapseOne" + patient.username
                                            }
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                          >
                                            <form>
                                              <div className="my-3 mx-3">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  id={
                                                    "firstSection" +
                                                    patient.username
                                                  }
                                                  placeholder="Enter First Section"
                                                />
                                              </div>
                                              <div className="my-3 mx-3">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  id={
                                                    "secondSection" +
                                                    patient.username
                                                  }
                                                  placeholder="Enter Second Section"
                                                />
                                              </div>

                                              <div className="my-3 mx-3">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  id={
                                                    "thirdSection" +
                                                    patient.username
                                                  }
                                                  placeholder="Enter Third Section"
                                                />
                                              </div>

                                              <div className="my-3 mx-3">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  id={
                                                    "fourthSection" +
                                                    patient.username
                                                  }
                                                  placeholder="Enter Fourth Section"
                                                />
                                              </div>

                                              <div className="my-3 mx-3">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  id={
                                                    "fifthSection" +
                                                    patient.username
                                                  }
                                                  placeholder="Enter Fifth Section"
                                                />
                                              </div>

                                              <button
                                                type="button"
                                                className="btn btn-primary my-3"
                                                onClick={() => {
                                                  sectionOrder(
                                                    patient.username
                                                  );
                                                }}
                                              >
                                                Submit
                                              </button>
                                            </form>
                                          </div>
                                        </div>
                                        <div className="accordion-item">
                                          <h2
                                            className="accordion-header"
                                            id="headingTwo"
                                          >
                                            <button
                                              className="accordion-button collapsed"
                                              type="button"
                                              data-bs-toggle="collapse"
                                              data-bs-target={
                                                "#collapseTwo" +
                                                patient.username
                                              }
                                              aria-expanded="false"
                                              aria-controls="collapseTwo"
                                            >
                                              Restrict Section
                                            </button>
                                          </h2>
                                          <div
                                            id={
                                              "collapseTwo" + patient.username
                                            }
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample"
                                          >
                                            <form>
                                              <div className="my-3 mx-3">
                                                <input
                                                  type="number"
                                                  className="form-control"
                                                  id={
                                                    "section" + patient.username
                                                  }
                                                  placeholder="Enter Section number"
                                                />
                                              </div>
                                              <button
                                                type="button"
                                                className="btn btn-primary my-3"
                                                onClick={() => {
                                                  restrictSection(
                                                    patient.username
                                                  );
                                                }}
                                              >
                                                Submit
                                              </button>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
                
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5 text-center">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">Chat Details</div>
              <div className="panel-body">
                <table className="table table-condensed">
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
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
        <form className="shadow text-center my-5" style={{marginLeft:"30%",marginRight:"30%"}}>
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
                Select specialist
              </option>
              {this.state.specialists.map((specialist) => (
              <option value={specialist.username}>{specialist.username}</option>
              ))}
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
          
          <button type="button" className="btn btn-primary my-3" onClick={()=>{sendMessageS(sessionStorage.getItem("username"))}}>
            Submit
          </button>
        </form>
        </div>
        <div className="col">
        <form className="shadow text-center my-5" style={{marginLeft:"30%",marginRight:"30%"}}>
        <div className="mx-5">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label mx-2 my-3 fw-bold"
            >
            </label>
            <select
              id="dId"
              className="form-control shadow rounded"
              aria-label="Default select example"
              required
            >
              <option defaultValue="Select role">
                Select patient
              </option>
              {this.state.patients.map((patient) => (
              <option value={patient.username}>{patient.username}</option>
              ))}
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
              id="ms"
              placeholder="Enter your message"
            />
          </div>
          
          <button type="button" className="btn btn-primary my-3" onClick={()=>{sendMessage(sessionStorage.getItem("username"))}}>
            Submit
          </button>
        </form>
        </div>
        </div>
      </>
    );
  }
}

export default DocHome;
