import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PatientSections() {
return (
  <>
  <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center my-5 mx-5">
    <li className="page-item"><Link className="page-link" to="/patSec1">Section 1</Link></li>
    <li className="page-item"><Link className="page-link" to="/patSec2">Section 2</Link></li>
    <li className="page-item"><Link className="page-link" to="/patSec3">Section 3</Link></li>
    <li className="page-item"><Link className="page-link" to="/patSec4">Section 4</Link></li>
    <li className="page-item"><Link className="page-link" to="/patSec5">Section 5</Link></li>
  </ul>
</nav>
  </>
  )
}
