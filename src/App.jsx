import "./App.css";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Join from "./Components/Join";
import Login from "./Components/Login";
import AboutUs from "./Components/AboutUs";
import PatientNavbar from "./Components/PatientNavbar";
import AdminNavbar from "./Components/AdminNavbar";
import SpecNavbar from "./Components/SpecNavbar";
import DoctorNavbar from "./Components/DoctorNavbar";
import AdminHome from "./Components/AdminHome";
import DoctorHome from "./Components/DocHome";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import PatientHome from "./Components/PatientHome";
import PatientChangePass from "./Components/PatientChangePass";
import PatientEditProfile from "./Components/PatientEditProfile";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import PatientDetails from "./Components/PatientDetails";
import PatientSections from "./Components/PatientSections";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/contact">
            <Navbar />
            <Contact />
          </Route>
          <Route path="/aboutUs">
            <Navbar />
            <AboutUs />
          </Route>
          <Route path="/join">
            <Navbar />
            <Join />
          </Route>
          <Route path="/login">
            <Navbar />
            <Login />
          </Route>

          <Route path="/patDash">
            <PatientNavbar />
            <PatientHome />
          </Route>
          <Route path="/patSec1">
            <PatientNavbar />
            <PatientHome />
            <Section1/>
          </Route>
          <Route path="/patSec2">
            <PatientNavbar />
            <PatientHome />
            <Section2/>
          </Route>
          <Route path="/patSec3">
            <PatientNavbar />
            <PatientHome />
            <Section3/>
          </Route>
          <Route path="/patSec4">
            <PatientNavbar />
            <PatientHome />
            <Section4/>
          </Route>
          <Route path="/patSec5">
            <PatientNavbar />
            <PatientHome />
            <Section5/>
          </Route>
          <Route path="/patAbout">
            <PatientNavbar />
            <AboutUs />
          </Route>
          <Route path="/patChangePass">
            <PatientNavbar />
            <PatientDetails/>
            <PatientChangePass/>
          </Route>
          <Route path="/patEditProfile">
            <PatientNavbar />
            <PatientDetails/>
            <PatientEditProfile/>
          </Route>
          
          
          
          
          <Route path="/docDash">
            <DoctorNavbar />
            <DoctorHome />
          </Route>
          <Route path="/spDash">
            <SpecNavbar />
          </Route>
          <Route path="/adminDash">
            <AdminNavbar />
            <AdminHome />
          </Route>
          <Route path="/">
            <Navbar />
            <Home/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
