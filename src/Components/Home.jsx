import { t } from "i18next";
import React from "react";

export default function Home() {
  return (
    <>
      {/* <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="slide_1.jpg"
              className="d-block"
              style={{ width: "100%", height: "850px" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Be Happy</h5>
              <p>Happiness lies in tranquility of mind.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="slide_2.jpg"
              className="d-block w-100"
              style={{ width: "100%", height: "850px" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>We Care for you</h5>
              <p>Not only body but mind needs proper care as well.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="slide_3.jpg"
              className="d-block w-100"
              style={{ width: "100%", height: "850px" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>A new Beginning</h5>
              <p>Come with us on a complete new journey towards happiness.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      <div className="container y_video">
        <blockquote>
          <h2 className="videohead">{t("home.intro")}</h2>
          <center>
            <iframe
              width="80%"
              height="600"
              src="https://www.youtube.com/embed/49mfPFTZsHs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ margin: "40px", borderRadius: "15px" }}
            ></iframe>
          </center>
          <p className="videohead">{t("home.text")}</p>
        </blockquote>
      </div>

      <div className="row my-5">
        <h2 className="display-5 text-center">{t("card_head")}</h2>
      </div>
      <div className="row my-5">
        <div className="col"></div>
        <div className="col">
          <div className="card h-100 tt_1">
            <img
              className="card-img-top img-home"
              src="hands.webp"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title text-center ctitle">{t("card_1")}</h5>
              <p className="card-text ctext">{t("card_1_text")}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 tt_2">
            <img
              className="card-img-top img-home"
              src="bulb.webp"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title text-center ctitle">{t("card_2")}</h5>
              <p className="card-text ctext">{t("card_2_text")}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 tt_3">
            <img
              className="card-img-top img-home"
              src="ads.webp"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title text-center ctitle">{t("card_3")}</h5>
              <p className="card-text ctext">{t("card_3_text")}</p>
            </div>
          </div>
        </div>
        <div className="col"></div>
        <div />

        <div className="row my-5 modal-body">
          <div className="col mx-5 sm-8">
            <div className="card">
              <h3 className="card-header text-white bg-primary mb-3">
              {t("h_11")}
              </h3>
              <div className="card-body">
                <h5 className="card-title">{t("h_1")}</h5>
                <p className="card-text">
                {t("p_1")}
                  <br />
                  {t("p_2")}
                </p>
                <hr />
                

                <h5 className="card-title">{t("h_2")}</h5>
                <p className="card-text">
                {t("p_3")}
                  <br /><br />
                  {t("p_4")}
                  <br /><br />
                  {t("p_5")}
                  <br /><br />
                  {t("p_6")}
                  <br /><br />
                  {t("p_7")}
                  <br /><br />
                  {t("p_8")}
                  <br /><br />
                  {t("p_9")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mx-3 container-fluid">
            <div className="my-5">
              <video
                autoPlay
                loop
                muted
                id="video"
                style={{ borderRadius: "20px" }}
              >
                <source src="what-is-mental-health.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <blockquote
              style={{
                borderLeft: "10px solid #ccc",
                margin: ".5em 10px",
                padding: "10px 20px",
              }}
            >
              {t("r_1")}
              <br />
              {t("r_2")}
              <br />
              <br />
              {t("r_3")}
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}
