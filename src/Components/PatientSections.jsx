import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PatientSections() {
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center my-5 mx-5 p-3">
          <li className="page-item">
            <Link className="" to="/patSec1">
              <button
                id="section1"
                style={{
                  backgroundColor: "#0d6efd",
                  borderColor: "#0d6efd",
                  border: "1px solid",
                  padding: ".375rem .75rem;",
                }}
                onClick={() =>
                  (document.getElementById("pat-cont-div").hidden = true)
                }
              >
                Section 1
              </button>
            </Link>
          </li>
          <li className="page-item">
            <Link className="" to="/patSec2">
              <button
                id="section2"
                style={{
                  backgroundColor: "#0d6efd",
                  borderColor: "#0d6efd",
                  border: "1px solid",
                  padding: ".375rem .75rem;",
                }}
                onClick={() =>
                  (document.getElementById("pat-cont-div").hidden = true)
                }
                disabled
              >
                Section 2
              </button>
            </Link>
          </li>
          <li className="page-item">
            <Link className="" to="/patSec3">
              <button
                id="section3"
                style={{
                  backgroundColor: "#0d6efd",
                  borderColor: "#0d6efd",
                  border: "1px solid",
                  padding: ".375rem .75rem;",
                }}
                onClick={() =>
                  (document.getElementById("pat-cont-div").hidden = true)
                }
                disabled
              >
                Section 3
              </button>
            </Link>
          </li>
          <li className="page-item">
            <Link className="" to="/patSec4">
              <button
                id="section4"
                style={{
                  backgroundColor: "#0d6efd",
                  borderColor: "#0d6efd",
                  border: "1px solid",
                  padding: ".375rem .75rem;",
                }}
                onClick={() =>
                  (document.getElementById("pat-cont-div").hidden = true)
                }
                disabled
              >
                Section 4
              </button>
            </Link>
          </li>
          <li className="page-item">
            <Link className="" to="/patSec5">
              <button
                id="section5"
                style={{
                  backgroundColor: "#0d6efd",
                  borderColor: "#0d6efd",
                  border: "1px solid",
                  padding: ".375rem .75rem;",
                }}
                onClick={() =>
                  (document.getElementById("pat-cont-div").hidden = true)
                }
                disabled
              >
                Section 5
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
