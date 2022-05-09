import "./App.css";
import Navbar from "./Components/Navbar";
import Join from "./Components/Join";
import Login from "./Components/Login";
import AboutUs from "./Components/AboutUs";
import PatientNavbar from "./Components/PatientNavbar";
import AdminNavbar from "./Components/AdminNavbar";
import SpecNavbar from "./Components/SpecNavbar";
import SpecHome from "./Components/SpecHome";
import DoctorNavbar from "./Components/DoctorNavbar";
import AdminHome from "./Components/AdminHome";
import DoctorHome from "./Components/DocHome";
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
import ManageSpec from "./Components/ManageSpec";
import ManageDoctor from "./Components/ManageDoctor";
import ManagePat from "./Components/ManagePat";
import PatientDetails from "./Components/PatientDetails";
import PatientSections from "./Components/PatientSections";
import DoctorJoin from "./Components/DoctorJoin";
import SpecialistJoin from "./Components/SpecialistJoin";
import AdminJoin from "./Components/AdminJoin";
import React from "react";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

const languages = [
  {
    code: "esp",
    name: "Español",
    country_code: "esp",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ind",
    name: "Hindi",
    country_code: "ind",
  },
];

function App() {
  const { t } = useTranslation();
  return (
    // <h1>{t("home.intro")}</h1>

    <>
      <Router>
        <Switch>
        <Route path="/adminJoin">
            <AdminNavbar />
            <AdminJoin />
          </Route>
        <Route path="/speJoin">
            <AdminNavbar />
            <SpecialistJoin />
          </Route>
        <Route path="/docJoin">
            <AdminNavbar />
            <DoctorJoin />
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
            <Section1 />
          </Route>
          <Route path="/patSec2">
            <PatientNavbar />
            <PatientHome />
            <Section2 />
          </Route>
          <Route path="/patSec3">
            <PatientNavbar />
            <PatientHome />
            <Section3 />
          </Route>
          <Route path="/patSec4">
            <PatientNavbar />
            <PatientHome />
            <Section4 />
          </Route>
          <Route path="/patSec5">
            <PatientNavbar />
            <PatientHome />
            <Section5 />
          </Route>
          <Route path="/patAbout">
            <PatientNavbar />
            <AboutUs />
          </Route>
          <Route path="/patChangePass">
            <PatientNavbar />
            <PatientDetails />
            <PatientChangePass />
          </Route>
          <Route path="/patEditProfile">
            <PatientNavbar />
            <PatientDetails />
            <PatientEditProfile />
          </Route>
          <Route path="/docDash">
            <DoctorNavbar />
            <DoctorHome />
          </Route>
          <Route path="/spDash">
            <SpecNavbar />
            <SpecHome />
          </Route>
          <Route path="/adminDash">
            <AdminNavbar />
            <AdminHome />
          </Route>
          <Route path="/manageSpec">
            <AdminNavbar />
            <ManageSpec />
          </Route>
          <Route path="/manageDoctor">
            <AdminNavbar />
            <ManageDoctor />
          </Route>
          <Route path="/managePat">
            <AdminNavbar />
            <ManagePat />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
