import React from "react";
import { Link } from "react-router-dom";
import Sec1 from "../Sections/Sec1";
import Sec2 from "../Sections/Sec2"
import Sec3 from "../Sections/Sec3"
import Sec4 from "../Sections/Sec4"
import Sec5 from "../Sections/Sec5"

export default function PatientHome() {
  return (
    <>
      <div className="container w-50 mx-auto">
        <ul class="breadcrumb">
          <li>
            <a href="#">Section-1</a>
          </li>
          <li>
            <a href="#">Section-2</a>
          </li>
          <li>
            <a href="#">Section-3</a>
          </li>
          <li>
            <a href="#">Section-4</a>
          </li>
          <li>
            <a href="#">Section-5</a>
          </li>
        </ul>
      </div>

      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <Link
              className="nav-link active"
              id="v-pills-sec1-tab"
              data-toggle="pill"
              to="v-pills-sec1"
              role="tab"
              aria-controls="v-pills-sec1"
              aria-selected="true"
            >
              Section-1
            </Link>
            <Link
              className="nav-link"
              id="v-pills-sec2-tab"
              data-toggle="pill"
              to="v-pills-sec2"
              role="tab"
              aria-controls="v-pills-sec2"
              aria-selected="false"
            >
              Section-2
            </Link>
            <Link
              className="nav-link"
              id="v-pills-sec3-tab"
              data-toggle="pill"
              to="v-pills-sec3"
              role="tab"
              aria-controls="v-pills-sec3"
              aria-selected="false"
            >
              Section-3
            </Link>
            <Link
              className="nav-link"
              id="v-pills-sec4-tab"
              data-toggle="pill"
              to="v-pills-sec4"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Section-4
            </Link>
            <Link
              className="nav-link"
              id="v-pills-sec5-tab"
              data-toggle="pill"
              to="v-pills-sec5"
              role="tab"
              aria-controls="v-pills-sec5"
              aria-selected="false"
            >
              Section-5
            </Link>
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-sec1"
              role="tabpanel"
              aria-labelledby="v-pills-sec1-tab"
            >
              <Sec1/>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-sec2"
              role="tabpanel"
              aria-labelledby="v-pills-sec2-tab"
            >
              <Sec2/>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-sec3"
              role="tabpanel"
              aria-labelledby="v-pills-sec3-tab"
            >
              <Sec3/>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-sec4"
              role="tabpanel"
              aria-labelledby="v-pills-sec4-tab"
            >
              <Sec4/>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-sec5"
              role="tabpanel"
              aria-labelledby="v-pills-sec5-tab"
            >
              <Sec5/>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
