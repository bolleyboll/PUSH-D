import React from 'react'
import { Link } from 'react-router-dom'

export default function Section4() {
  const disable=()=>{
    document.getElementById("section1").disabled=false
    document.getElementById("section2").disabled=false
    document.getElementById("section3").disabled=false
    document.getElementById("section4").disabled=false
    document.getElementById("section5").disabled=false
  }
  
  return (
    <div>
      This is section 4.
      <Link to="/patSec5"><button onClick={disable}>Completed Section 4</button></Link>
    </div>
  );
}
