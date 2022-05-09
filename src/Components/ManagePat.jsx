import React from "react";
import { ThemeProvider } from "styled-components";
import UserService from "../Service/UserService";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Row, Col } from "reactstrap";

class ManagePat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    UserService.getAllPatients().then((response) => {
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

    const deletePatient = (username) => {
      axios.delete(`${base_url}/patient/del/${username}`).then(
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
                    <td>Patient ID</td>
                    <td>Username</td>
                    <td>Name</td>
                    <td>E-mail</td>
                    <td>Options</td>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => (
                    <tr key={user.patientID}>
                      <th scope="row">{user.patientID}</th>
                      <td>{user.username} </td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => {
                            deletePatient(user.username);
                          }}
                        >
                          Delete Patient
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
        
        </Row>
      </>
    );
  }
}

export default ManagePat;
