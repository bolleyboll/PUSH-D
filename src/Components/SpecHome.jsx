import React from "react";
import UserService from "../Service/UserService";
import base_url from "../api/bootapi";
import axios from "axios";

class SpecHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      chats: [],
      doctors:[]
    };
  }

  componentDidMount() {
    UserService.getSpecPatients().then((response) => {
      this.setState({ patients: response.data });
    });
    UserService.getChats().then((response) => {
      console.log("Chats")
      console.log(response.data);
      this.setState({ chats: response.data });
    });
    UserService.getSpecDoctors().then((response) => {
      console.log("Doctors")
      console.log(response.data);
      this.setState({ doctors: response.data });
    });
  }

  render() {
    // if( this.state.users === undefined || this.state.users.doctor === undefined || this.state.users.doctor.specialist === undefined) {
    //     return <div>Loading...</div>
    // }
    const assignDoctor = (username) => {
      console.log(username);
      axios.get(`${base_url}/changedoctor/${username}`).then((response) => {
        window.open("/spDash", "_self");
      });
    };
    const sendMessage = (username) => {
      console.log({senderId:username,receiverId:document.getElementById("doctorId").value,message:document.getElementById("msg").value});
      axios.post(`${base_url}/chat/save`,{id:Math.floor(Math.random() * 1000),senderId:username,receiverId:document.getElementById("doctorId").value,message:document.getElementById("msg").value}).then((response) => {
        console.log("message sent")  
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
                                    <th>Last Login</th>
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
                                      <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => {
                                          assignDoctor(patient.username);
                                        }}
                                      >
                                        Assign Doctor
                                      </button>
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
        <form className="shadow text-center my-5" style={{marginLeft:"35%",marginRight:"35%"}}>
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
              {this.state.doctors.map((doctor) => (
              <option value={doctor.username}>{doctor.username}</option>
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
          
          <button type="button" className="btn btn-primary my-3" onClick={()=>{sendMessage(sessionStorage.getItem("username"))}}>
            Submit
          </button>
        </form>
        </>
    );
  }
}

export default SpecHome;
