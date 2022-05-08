import React from 'react'
import { Link } from 'react-router-dom'

export default function Section2() {
  const disable=()=>{
    document.getElementById("section1").disabled=false
    document.getElementById("section2").disabled=false
    document.getElementById("section3").disabled=false
    document.getElementById("section4").disabled=true
    document.getElementById("section5").disabled=true
  }
  return (
    <div>
      This is section 2.
      <Link to="/patSec3"><button onClick={disable}>Completed Section 2</button></Link>
    </div>
  );
}
