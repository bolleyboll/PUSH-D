import React from "react";
import { ThemeProvider } from "styled-components";
import SpecService from "../Service/SpecService";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Row, Col } from "reactstrap";
import SpecialistJoin from "./SpecialistJoin";
import SpecialistEdit from "./SpecialistEdit";

class ManageSpec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    SpecService.getSpecialist().then((response) => {
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

    const deleteSpec = (username) => {
      axios.delete(`${base_url}/specialist/del/${username}`).then(
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
                    <td>Specialist ID</td>
                    <td>Username</td>
                    <td>Name</td>
                    <td>E-mail</td>
                    <td>Options</td>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => (
                    <tr key={user.specID}>
                      <th scope="row">{user.specID}</th>
                      <td>{user.username} </td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => {
                            deleteSpec(user.username);
                          }}
                        >
                          Delete Specialist
                        </button>
                      </td>
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
                    ADD SPECIALIST
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <SpecialistJoin />
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
                    EDIT SPECIALIST
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <SpecialistEdit />
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

export default ManageSpec;
