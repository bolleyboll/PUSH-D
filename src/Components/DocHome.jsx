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
    };
  }

  componentDidMount() {
    UserService.getPatients().then((response) => {
      this.setState({ patients: response.data });
    });
  }

  render() {
    const restrictSection = (username) => {
      console.log(username)
      console.log(document.getElementById(`section${username}`).value)
      axios
        .put(`${base_url}/restrictsection/${username}`, {
          sec: document.getElementById(`section${username}`.value),
        })
        .then((response) => {
          window.open("/docHome", "_self");
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
        .put(`${base_url}/doctor/sectionorder/${username}`, { sectionOrder: str2 })
        .then((response) => {
          window.open("/docHome", "_self");
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
                          <td colspan="12" className="hiddenRow">
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
      </>
    );
  }
}

export default DocHome;
