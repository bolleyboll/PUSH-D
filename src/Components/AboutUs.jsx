import React from "react";
import { t } from "i18next";

export default function AboutUs() {
  return (
    <>

      <div className="container text-center">
        <div className="row my-5 justify-content-center">
          <div className="card cardAbout" style={{ width: "25rem" }}>
            <img
              src="Srikant_Sir.jpg"
              className="card-img-top myyimg"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{t("as_h")}</h5>
              <p className="card-text">
                <i>
                {t("as_1")}
                </i>
              </p>
            </div>
          </div>
        </div>
        <div />
        <div className="container"></div>
        <div className="row my-5">
          <div className="col">
            <div className="card cardAbout" style={{ width: "25rem" }}>
              <img src="aman.jpeg" className="card-img-top myyimg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{t("as1")}</h5>
                <p className="card-text">
                  <i>
                  {t("as_t")}
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardAbout" style={{ width: "25rem" }}>
              <img
                src="kunal_2.jpeg"
                className="card-img-top myyimg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{t("as2")}</h5>
                <p className="card-text">
                  <i>
                  {t("as_t")}
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardAbout" style={{ width: "25rem" }}>
              <img
                src="nikhil.jpeg"
                className="card-img-top myyimg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{t("as3")}</h5>
                <p className="card-text">
                  <i>
                  {t("as_t")}
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <div className="card cardAbout" style={{ width: "25rem" }}>
              <img
                src="shubham.jpeg"
                className="card-img-top myyimg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{t("as4")}</h5>
                <p className="card-text">
                  <i>
                  {t("as_t")}
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardAbout" style={{ width: "25rem" }}>
              <img
                src="vishal.jpeg"
                className="card-img-top myyimg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{t("as5")}</h5>
                <p className="card-text">
                  <i>
                  {t("as_t")}
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardAbout" style={{ width: "25rem" }}>
              <img
                src="SuchiLaad.jpeg"
                className="card-img-top myyimg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{t("as6")}</h5>
                <p className="card-text">
                  <i>
                  {t("as_t")}
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
