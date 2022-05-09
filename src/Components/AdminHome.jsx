import React from "react";
import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <div class="container-fluid pt-5 p-5">
      <div class="row row-cols-1 row-cols-md-3 g-4 mx-4">
        <div class="col">
          <div class="card text-center h-100 shadow rounded float-start">
            <img src="img_2.png" style={{height:"455px"}} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Add,delete and edit the details of Specialists.</h5>
              <Link
                to="/manageSpec"
                className="btn btn-primary align-center stretched-link mx-1 shadow"
                style={{
                  borderRadius: "12px",
                  backgroundColor: "#00ADEF",
                  borderColor: "#00ADEF",
                }}
              >
                Manage Specialists
              </Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center h-100 shadow rounded float-start">
            <img src="img_3.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Add,delete and edit the details of Doctors.</h5>
              <Link
                to="/manageDoctor"
                className="btn btn-primary mx-1 stretched-link shadow"
                style={{
                  borderRadius: "12px",
                  backgroundColor: "#00ADEF",
                  borderColor: "#00ADEF",
                }}
              >
                Manage Doctors
              </Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center h-100 shadow rounded float-start ">
            <img src="img_1.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Add,delete and edit the details of Patients.</h5>
              <Link
                to="/managePat"
                className="btn btn-primary mx-1 stretched-link shadow"
                style={{
                  borderRadius: "12px",
                  backgroundColor: "#00ADEF",
                  borderColor: "#00ADEF",
                }}
              >
                Manage Patients
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function AdminHome() {
//   return (

//     <div class="row">
//   <div class="row-cols-3">
//     <div className="card my-5 mx-5 shadow rounded float-start" styles="width: 33%;">
//     <img src="slide_1.jpg" className="card-img-top" alt="..." />
//   <div className="card-body">
//     <h5 className="card-title">Manage Specialists</h5>
//     <p className="card-text">Add,delete and edit the details of Specialists.</p>
//     <Link to="/addSpec" className="btn btn-primary mx-1 shadow" style={{borderRadius:'12px',backgroundColor:'#00ADEF',borderColor:'#00ADEF'}}>Add Specialist</Link>
//     <Link to="/deleteSpec" className="btn btn-primary mx-1 shadow" style={{borderRadius:'12px',backgroundColor:'#00ADEF',borderColor:'#00ADEF'}}>Delete Specialist</Link>
//     <Link to="/editSpec" className="btn btn-primary mx-1 shadow" style={{borderRadius:'12px',backgroundColor:'#00ADEF',borderColor:'#00ADEF'}}>Edit Specialist</Link>
//   </div>
// </div>
// </div>
// <div class="row-cols-3">
// <div className="card my-5 mx-5 shadow float-start" styles="width: 33%;">
// <img src="slide_1.jpg" className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Manage Doctors</h5>
//     <p className="card-text">Add,delete and edit the details of Doctors.</p>
//     <Link to="#" className="btn btn-primary mx-1 shadow" style={{borderRadius:'12px',backgroundColor:'#00ADEF',borderColor:'#00ADEF'}}>Add Doctor</Link>
//     <Link to="#" className="btn btn-primary mx-1 shadow" style={{borderRadius:'12px',backgroundColor:'#00ADEF',borderColor:'#00ADEF'}}>Delete Doctor</Link>
//     <Link to="#" className="btn btn-primary mx-1 shadow" style={{borderRadius:'12px',backgroundColor:'#00ADEF',borderColor:'#00ADEF'}}>Edit Doctor</Link>
//   </div>
// </div>
// </div>
// <div class="row-cols-3">
// <div className="card my-5 mx-5 shadow rounded float-start" styles="width: 33%;">
// <img src="slide_1.jpg" className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">Manage Patients</h5>
//     <p className="card-text">Add,delete and edit the details of Patients.</p>
//     <Link to="#" className="btn btn-primary mx-1 shadow" style={{borderRadius:'12px',backgroundColor:'#00ADEF',borderColor:'#00ADEF'}}>Add Patient</Link>
//     <Link to="#" className="btn btn-primary mx-1 shadow" style={{borderRadius:'12px',backgroundColor:'#00ADEF',borderColor:'#00ADEF'}}>Delete Patient</Link>
//     <Link to="#" className="btn btn-primary mx-1 shadow" style={{borderRadius:'12px',backgroundColor:'#00ADEF',borderColor:'#00ADEF'}}>Edit Patient</Link>
//   </div>
// </div>
// </div>
// </div>
//   )
// }
