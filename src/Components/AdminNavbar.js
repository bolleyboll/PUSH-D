import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark shadow rounded" style={{ backgroundColor: '#F2EEE3' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src="navbar_image.png" className="img-fluid" width="200"></img>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/adminDash"><button type="button" className="btn btn-primary shadow" style={{ borderRadius: '12px', backgroundColor: '#00ADEF', borderColor: '#00ADEF' }} >HOME</button></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/"><button type="button" className="btn btn-primary shadow" style={{ borderRadius: '12px', backgroundColor: '#00ADEF', borderColor: '#00ADEF' }} >LOGOUT</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
