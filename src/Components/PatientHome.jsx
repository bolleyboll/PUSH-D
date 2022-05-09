import React from "react";
import { Link } from "react-router-dom";
import PatientDetails from "./PatientDetails";
import PatientSections from "./PatientSections";
import Section1 from "./Section1";

export default function PatientHome() {
  return (
    <>
      <PatientDetails />
      <PatientSections />
      <div
        id="pat-cont-div"
        class="container"
        style={{ position: "absolute", top: "30%", left: "45%" }}
      >
        <div className="fs-1 text-center">Welcome To Active Minds!</div>
        <div className="fs-5 text-center">It's Nice To Meet You</div>
        <br />
        <br />
        <Link
          className="btn btn-primary btn-xl text-uppercase"
          href="#services"
          style={{ position: "absolute", left: "35%" }}
          to="/patSec1"
          onClick={() =>
            (document.getElementById("pat-cont-div").hidden = true)
          }
        >
          Start Sections
        </Link>
      </div>
    </>
  );
}
