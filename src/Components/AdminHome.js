import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminHome() {
  return (
    <>
      <div className="card my-5 mx-5 shadow rounded float-start">
        <div className="card-body">
          <h5 className="card-title">Manage Specialists</h5>
          <p className="card-text">Add,delete and edit the details of Specialists.</p>
          <Link to="/addSpec" className="btn btn-primary mx-1 shadow" style={{ borderRadius: '12px', backgroundColor: '#00ADEF', borderColor: '#00ADEF' }}>Add Specialist</Link>
          <Link to="/deleteSpec" className="btn btn-primary mx-1 shadow" style={{ borderRadius: '12px', backgroundColor: '#00ADEF', borderColor: '#00ADEF' }}>Delete Specialist</Link>
          <Link to="/editSpec" className="btn btn-primary mx-1 shadow" style={{ borderRadius: '12px', backgroundColor: '#00ADEF', borderColor: '#00ADEF' }}>Edit Specialist</Link>
        </div>
      </div>
      <div className="card my-5 mx-5 shadow float-start">
        <div className="card-body">
          <h5 className="card-title">Manage Doctors</h5>
          <p className="card-text">Add,delete and edit the details of Doctors.</p>
          <Link to="#" className="btn btn-primary mx-1 shadow" style={{ borderRadius: '12px', backgroundColor: '#00ADEF', borderColor: '#00ADEF' }}>Add Doctor</Link>
          <Link to="#" className="btn btn-primary mx-1 shadow" style={{ borderRadius: '12px', backgroundColor: '#00ADEF', borderColor: '#00ADEF' }}>Delete Doctor</Link>
          <Link to="#" className="btn btn-primary mx-1 shadow" style={{ borderRadius: '12px', backgroundColor: '#00ADEF', borderColor: '#00ADEF' }}>Edit Doctor</Link>
        </div>
      </div>
      <div className="card my-5 mx-5 shadow rounded float-start">
        <div className="card-body">
          <h5 className="card-title">Manage Patients</h5>
          <p className="card-text">Add,delete and edit the details of Patients.</p>
          <Link to="#" className="btn btn-primary mx-1 shadow" style={{ borderRadius: '12px', backgroundColor: '#00ADEF', borderColor: '#00ADEF' }}>Add Patient</Link>
          <Link to="#" className="btn btn-primary mx-1 shadow" style={{ borderRadius: '12px', backgroundColor: '#00ADEF', borderColor: '#00ADEF' }}>Delete Patient</Link>
          <Link to="#" className="btn btn-primary mx-1 shadow" style={{ borderRadius: '12px', backgroundColor: '#00ADEF', borderColor: '#00ADEF' }}>Edit Patient</Link>
        </div>
      </div>
    </>
  )
}
