import React from 'react'
import { Link } from 'react-router-dom'

export default function Section3() {
  const disable=()=>{
    document.getElementById("section1").disabled=false
    document.getElementById("section2").disabled=false
    document.getElementById("section3").disabled=false
    document.getElementById("section4").disabled=false
    document.getElementById("section5").disabled=true
  }
  return (
    <div>
      This is section 3.
    <Link to="/patSec4"><button onClick={disable}>Completed Section 3</button></Link>
    </div>
  )
}
