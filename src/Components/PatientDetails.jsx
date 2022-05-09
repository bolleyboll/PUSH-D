

import React from 'react';
import UserService from '../Service/UserService';

class PatientDetails extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:{}
        }
    }

    componentDidMount(){
      UserService.getPatient().then((response) => {
            this.setState({ users: response.data})
            console.log(response.data)
        });
    }

    render (){
     if( this.state.users === undefined || this.state.users.doctor === undefined || this.state.users.doctor.specialist === undefined) {
          return <div>Loading...</div>
      }
        return (<>
            <div className='mx-3 text-center'>
                <table className = "table rounded shadow float-start my-5 mx-5" style={{width:"300px"}}>
                    <tbody>
                                <tr>
                                     <th scope="row">Username</th>
                                     <td>{this.state.users.username} </td>   
                                </tr>
                                <tr>
                                     <th scope="row">Name</th>
                                     <td>{this.state.users.name} </td>   
                                </tr>
                                <tr>
                                     <th scope="row">Age</th>
                                     <td>{this.state.users.age} </td>   
                                </tr>
                                <tr>
                                     <th scope="row">City</th>
                                     <td>{this.state.users.city} </td>   
                                </tr>
                                <tr>
                                     <th scope="row">DOB</th>
                                     <td>{this.state.users.dob} </td>   
                                </tr>
                                <tr>
                                     <th scope="row">Education</th>
                                     <td>{this.state.users.education} </td>   
                                </tr>
                                <tr>
                                     <th scope="row">Email</th>
                                     <td>{this.state.users.email} </td>   
                                </tr>
                                <tr>
                                     <th scope="row">Gender</th>
                                     <td>{this.state.users.gender} </td>   
                                </tr>
                                <tr>
                                     <th scope="row">Marital Status</th>
                                     <td>{this.state.users.maritalStatus} </td>   
                                </tr>
                                <tr>
                                     <th scope="row">Mobile</th>
                                     <td>{this.state.users.mobile} </td>   
                                </tr>
                                <tr>
                                     <th scope="row">Gender</th>
                                     <td>{this.state.users.gender} </td>   
                                </tr>
                                <tr>
                                     <th scope="row">Occupation</th>
                                     <td>{this.state.users.occupation} </td>   
                                </tr>
                                <tr>
                                     <th scope="row">Your doctor Id</th>
                                    <td>{this.state.users.doctor.name} </td>   
                                </tr>


                    </tbody>
                </table>

            </div>
            </>
        )
    }
}

export default PatientDetails

