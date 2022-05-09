import React from "react";
import UserService from "../Service/UserService";
import { Link } from "react-router-dom";

class PatientSections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      myArray:"",
    };
  }
  
  componentDidMount() {
    UserService.getPatient().then((response) => {
      this.setState({ users: response.data });
      console.log(response.data);
      let text = this.state.users.sectionOrder;
      this.state.myArray = text.split(", ");

      document.getElementById("section1").innerHTML ="Section "+this.state.myArray[0];
      document.getElementById("section2").innerHTML ="Section "+this.state.myArray[1];
      document.getElementById("section3").innerHTML ="Section "+this.state.myArray[2];
      document.getElementById("section4").innerHTML ="Section "+this.state.myArray[3];
      document.getElementById("section5").innerHTML ="Section "+this.state.myArray[4];
      sessionStorage.setItem("sec1","/patSec"+this.state.myArray[0])
      sessionStorage.setItem("sec2","/patSec"+this.state.myArray[1])
      sessionStorage.setItem("sec3","/patSec"+this.state.myArray[2])
      sessionStorage.setItem("sec4","/patSec"+this.state.myArray[3])
      sessionStorage.setItem("sec5","/patSec"+this.state.myArray[4])
      sessionStorage.setItem("nextOfSec1","/patSec"+this.state.myArray[(this.state.myArray.indexOf("1")+1)%5])
      sessionStorage.setItem("nextOfSec2","/patSec"+this.state.myArray[(this.state.myArray.indexOf("2")+1)%5])
      sessionStorage.setItem("nextOfSec3","/patSec"+this.state.myArray[(this.state.myArray.indexOf("3")+1)%5])
      sessionStorage.setItem("nextOfSec4","/patSec"+this.state.myArray[(this.state.myArray.indexOf("4")+1)%5])
      sessionStorage.setItem("nextOfSec5","/patSec"+this.state.myArray[(this.state.myArray.indexOf("5")+1)%5])
      sessionStorage.setItem("nOfSec1","section"+(this.state.myArray.indexOf("1")+2))
      sessionStorage.setItem("nOfSec2","section"+(this.state.myArray.indexOf("2")+2))
      sessionStorage.setItem("nOfSec3","section"+(this.state.myArray.indexOf("3")+2))
      sessionStorage.setItem("nOfSec4","section"+(this.state.myArray.indexOf("4")+2))
      sessionStorage.setItem("nOfSec5","section"+(this.state.myArray.indexOf("5")+2))
      
      console.log(sessionStorage.getItem("sec1"))
      // console.log(sessionStorage.getItem("nOfSec2"))
      // console.log(sessionStorage.getItem("nOfSec3"))
      // console.log(sessionStorage.getItem("nOfSec4"))
      // console.log(sessionStorage.getItem("nOfSec5"))
    });
  }

  render() {
    return (
      <>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center my-5 mx-5 p-3">
            <li className="page-item">
              <Link className="" to={sessionStorage.getItem("sec1")}>
                <button
                  id="section1"
                  onClick={() =>
                    (document.getElementById("pat-cont-div").hidden = true)
                  }
                >
                </button>
              </Link>
            </li>
            <li className="page-item">
              <Link className="" to={sessionStorage.getItem("sec2")}>
                <button
                  id="section2"
                  onClick={() =>
                    (document.getElementById("pat-cont-div").hidden = true)
                  }
                  disabled
                >
                </button>
              </Link>
            </li>
            <li className="page-item">
              <Link className="" to={sessionStorage.getItem("sec3")}>
                <button
                  id="section3"
                  onClick={() =>
                    (document.getElementById("pat-cont-div").hidden = true)
                  }
                  disabled
                >
                </button>
              </Link>
            </li>
            <li className="page-item">
              <Link className="" to={sessionStorage.getItem("sec4")}>
                <button
                  id="section4"
                  onClick={() =>
                    (document.getElementById("pat-cont-div").hidden = true)
                  }
                  disabled
                >
                </button>
              </Link>
            </li>
            <li className="page-item">
              <Link className="" to={sessionStorage.getItem("sec5")}>
                <button
                  id="section5"
                  onClick={() =>
                    (document.getElementById("pat-cont-div").hidden = true)
                  }
                  disabled
                >
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default PatientSections;
