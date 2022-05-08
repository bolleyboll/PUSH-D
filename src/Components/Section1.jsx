import React from "react";
import { Link } from "react-router-dom";

export default function Section1() {
  const disable=()=>{
    document.getElementById("section1").disabled=false
    document.getElementById("section2").disabled=false
    document.getElementById("section3").disabled=true
    document.getElementById("section4").disabled=true
    document.getElementById("section5").disabled=true
  }
  return (
    <div>
      <h3 className="lead text-center">
        <strong>FINDING HAPPINESS</strong>
      </h3><br/>
      <p className="lead mx-2">
        <em>
            There is a time to bid good-bye to the old and the ordinary, and to
            awaken the beauty within. That time is now. It is time to wake up
            and take charge of life and rethink refreshingly.
        </em>
      </p>
      <p className="">
        Attaining happiness has been the most common human pursuit as we build our lives. In who we are, what we do, where we go, how we perform—the bottom line has been to seek and experience happiness. Discussing it as a topic helps us to understand the emotion in its entirety, so as to create real and lasting happiness.
      </p>
        <Link to="/patSec2"><button onClick={disable}>Completed Section 1</button></Link>
    </div>
  );
}
