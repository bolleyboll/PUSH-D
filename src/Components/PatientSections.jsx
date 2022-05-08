import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PatientSections() {
return (
  <>
  <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center my-5 mx-5">
    <li className="page-item"><Link className="" to="/patSec1"><button id="section1">Section 1</button></Link></li>
    <li className="page-item"><Link className="" to="/patSec2"><button id="section2" disabled>Section 2</button></Link></li>
    <li className="page-item"><Link className="" to="/patSec3"><button id="section3" disabled>Section 3</button></Link></li>
    <li className="page-item"><Link className="" to="/patSec4"><button id="section4" disabled>Section 4</button></Link></li>
    <li className="page-item"><Link className="" to="/patSec5"><button id="section5" disabled>Section 5</button></Link></li>
  </ul>
</nav>
{/* <div className="btn-group" role="group" aria-label="Basic outlined example">
  <Link to="/patSec1"><button type="button" className="btn btn-outline-primary" id="section1">Section 1</button></Link>
  <Link to="/patSec2"><button type="button" className="btn btn-outline-primary" id="section2">Section 2</button></Link>
  <Link to="/patSec3"><button type="button" className="btn btn-outline-primary" id="section3">Section 3</button></Link>
  <Link to="/patSec4"><button type="button" className="btn btn-outline-primary" id="section4">Section 4</button></Link>
  <Link to="/patSec5"><button type="button" className="btn btn-outline-primary" id="section5">Section 5</button></Link>
</div> */}
  </>
  )
}
