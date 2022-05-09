import "animate.css";

import React from "react";
import { Link } from "react-router-dom";
import UserService from "../Service/UserService";
import "./DocHome.css";
import TryCode from "./TryCode";

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
                          data-bs-target={"#" + patient.username}
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
                              id={patient.username}
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
                                            Hello
                                            <form>
                                              <div class="mb-3">
                                                <label
                                                  for="exampleInputPassword1"
                                                  class="form-label"
                                                >
                                                  Enter Section Order
                                                </label>
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                  id="exampleInputPassword1"
                                                />
                                              </div>
                                              <button
                                                type="submit"
                                                class="btn btn-primary"
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
                                            hello section
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
