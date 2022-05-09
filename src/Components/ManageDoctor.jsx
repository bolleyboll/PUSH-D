import React from "react";
import { ThemeProvider } from "styled-components";
import UserService from "../Service/UserService";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Row, Col } from "reactstrap";
import DoctorJoin from "./DoctorJoin";
import DoctorEdit from "./DoctorEdit";

class ManageDoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    UserService.getDoctor().then((response) => {
      this.setState({ users: response.data });
      console.log(response.data);
    });
  }

  render() {
    const deleteTask = (username) => {
      let newTodos = this.state.users.filter(
        (todo) => todo.username !== username
      );
      this.setState({ users: newTodos });
    };

    const deleteDoctor = (username) => {
      axios.delete(`${base_url}/doctor/del/${username}`).then(
        (response) => {
          deleteTask(username);
          toast.success("Entry has been deleted");
        },
        (error) => {
          toast.error("Something went wrong");
        }
      );
    };
    return (
      <>
        <Row>
          <Col md={8}>
            <div className="container mx-3 text-center">
              <table
                className="table table-hover rounded shadow my-5 mx-5 table-bordered"
                style={{ width: "1200px" }}
              >
                <thead>
                  <tr>
                    <td>Doctor ID</td>
                    <td>Username</td>
                    <td>Name</td>
                    <td>E-mail</td>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => (
                    <tr key={user.doctorID}>
                      <th scope="row">{user.doctorID}</th>
                      <td>{user.username} </td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>

                    </tr>
                  ))}
                  {/* <tr>
                <th scope="row">Name</th>
                <td>{this.state.users.name} </td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>{this.state.users.email} </td>
              </tr>
              <tr>
                <th scope="row">Your Specialist ID</th>
                <td>{this.state.users.specID} </td>
              </tr> */}
                </tbody>
              </table>
            </div>
          </Col>
          <Col md={4}>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    ADD DOCTOR
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <DoctorJoin />
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    EDIT DOCTOR
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <DoctorEdit />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default ManageDoc;
