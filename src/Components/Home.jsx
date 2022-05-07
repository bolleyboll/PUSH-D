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
          <h2 className="videohead">Active Minds</h2>
          <center>
          <iframe 
            width="80%"
            height="600"
            src="https://www.youtube.com/embed/49mfPFTZsHs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{margin:"40px"}}
          ></iframe>
          </center>
          <p className="videohead">
            We know from a mental health survey that 74% of high school students
            report having experienced stress or anxiety as a result of COVID-19.
            So, we wanted to reach out to them directly to learn more. We invite
            you to watch this short video.Then share their message far and wide:
            Break the Stigma.
          </p>
        </blockquote>
      </div>

      <div className="row my-5">
        <h2 className="display-5 text-center">
          How does Active Minds help you?
        </h2>
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
              <h5 className="card-title text-center ctitle">
                We don’t just educate you—we empower you.
              </h5>
              <p className="card-text ctext">
                We offer the guidance and encouragement you need to find hope,
                get motivated, take charge of your mental health, and start
                feeling better
              </p>
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
              <h5 className="card-title text-center ctitle">
                We highlight what you need to know to help yourself.
              </h5>
              <p className="card-text ctext">
                We focus on what you need to know to understand the challenges
                you face, make informed decisions, and take positive steps.
              </p>
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
              <h5 className="card-title text-center ctitle">
                Our website is 100% ad-free and not for profit.
              </h5>
              <p className="card-text ctext">
                We don’t accept advertising, sell anything, or answer to
                corporate sponsors. The result: a better online experience and
                integrity you can trust.
              </p>
            </div>
          </div>
        </div>
        <div className="col"></div>
        <div />

        <div className="row my-5">
          <div className="col mx-5 sm-8">
            <div className="card">
              <h3 className="card-header text-white bg-primary mb-3">
                About Active Minds
              </h3>
              <div className="card-body">
                <h5 className="card-title">What is Active Minds</h5>
                <p className="card-text">
                  PUSH-D (Practice and Use Self-Help for Depression) is a
                  computer-based self-care program which is meant to empower
                  individuals by offering a space to learn, strengthen and
                  practice psychological skills that can be useful in dealing
                  with depressive symptoms.
                  <br />
                  This program is NOT meant for diagnosis of depression and is
                  not a substitute for professional services provided by a
                  mental health professional.
                </p>

                <h5 className="card-title">Why was Active Minds developed</h5>
                <p className="card-text">
                  Depression is a common mental health concern which affects a
                  large proportion of individuals at any given point of time.
                  Depression can impact our functioning and quality of life even
                  when the symptoms are mild in severity or too minimal to label
                  it as clinical depression or a disorder.
                  <br />
                  Depression is a condition for which effective intervention
                  methods are available. However, many individuals suffering
                  from depression do not have sufficient information and
                  resources to deal with it effectively or to reach out for
                  professional help.
                  <br />
                  The World Health Organization(WHO) recommends that a variety
                  of services and approaches, including self-care approaches
                  need to be developed in all countries to support the unmet
                  needs of individuals with common mental health concerns.{" "}
                  <br />
                  Self-help/self-care is the first level of mental health care
                  which is likely to benefit a large number of individuals
                  dealing with common mental health concerns, while a smaller
                  number of individuals require additional help such as face-to
                  face consultations with mental health professionals and
                  intensive treatment. Self-care is similar to first aid. An
                  individual can use it by himself/herself to hasten recovery.
                  <br />
                  PUSH-D program has been developed for individuals who are
                  experiencing low severity/mild levels of depression. It is
                  meant to help such individuals to help themselves to deal with
                  depression and enhance their functioning and
                  well-being.However, this program is NOT meant for diagnosis of
                  depression and is NOT a substitute for help provided by a
                  mental health professional.
                  <br />
                  It is based on same psychotherapeutic or psychological
                  approaches that have been applied in the management of
                  depression in face-face therapy interactions. The techniques
                  incorporated in this program are based on principles of
                  Cognitive Behaviour Therapy (CBT), Interpersonal Therapy(IPT),
                  Supportive Therapy as well as Positive Psychology. Majority of
                  the techniques used in this program are an integral part of
                  interventions for depression that are based on available
                  research evidence.
                  <br />A unique feature of this self-care program is that it
                  adds a touch of professional contact through periodic mobile
                  prompts and emails to help keep up your motivation to complete
                  the program.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mx-3">
            <div style={{ textAlign: "center" }} className="my-5">
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
          </div>
        </div>
      </div>
    </>
  );
}
