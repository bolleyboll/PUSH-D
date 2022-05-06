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
            <Home>{(document.body.style.backgroundColor = "#E5F2FA")}</Home>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;