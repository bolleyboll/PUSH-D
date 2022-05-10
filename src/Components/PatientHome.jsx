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
      {/* <div className="jumbotron jum">
        <h1 className="display-4">Welcome to Active Minds!</h1>
        <p className="lead"> Its Nice to Meet You</p>
      </div> */}
      <div
        id="pat-cont-div"
        className="container"
      >
        
      <div class="jumbotron shadow">
        <h1 class="display-4">Welcome To Active Minds!</h1>
        <br />
        <p class="lead">
        It's Nice To Meet You
        </p>
        <br/>
        <p className="fs-4">
        Click on the first section to get started
        </p>
      </div>
      </div> 
    </>
  );
}
