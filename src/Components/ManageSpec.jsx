import React from "react";
import { ThemeProvider } from "styled-components";
import SpecService from "../Service/SpecService";
import base_url from "../api/bootapi";
import axios from "axios";
import {toast} from "react-toastify"

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
    const deleteSpec=(username)=>{
        axios.delete(`${base_url}/specialist/del/${username}`).then(
            (response)=>
            {
                toast.success("Entry has been deleted")
            },
            (error)=>
            {
                toast.error("Something went wrong")
            }
        )
    }
    return (
      <>
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
              {
                  this.state.users.map(
                      user =>
                <tr key={user.specID}>
                  <th scope="row">{user.specID}</th>
                  <td>{user.username} </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                      <td>
                  <button type="button" className="btn btn-primary">
                    Edit Specialist
                  </button>
                  </td>
                  <td>
                  <button type="button"  className="btn btn-danger" onClick={()=> {deleteSpec(user.username)}}>
                    Delete Specialist
                  </button>
                  </td>
                </td>
                </tr>
                  )
              }
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
      </>
    );
  }
}

export default ManageSpec;
