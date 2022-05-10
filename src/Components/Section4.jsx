import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import Pie_chart from "./Pie_chart";
import { toast, ToastContainer } from "react-toastify";
import "./Section_style.css";
import { Link } from "react-router-dom";
const Section4 = () => {
  const disable = () => {
    document.getElementById(sessionStorage.getItem("nOfSec4")).disabled = false;
  };

  useEffect(() => {
    document.title = "Active Minds";
   
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [course, setCourse] = useState({});

  //Form handler Funtion
  const handleForm = (e) => {
    console.log(course);
    postDatatoServer(course);
    e.preventDefault();
  };

  // Creating function to post data on the server
  const postDatatoServer = (data) => {
    const str1 = data.q1;
      const str2 = str1.concat(
        ",",
        data.q2,
        ",",
        data.q3,
        ",",
        data.q4
        );
        console.log(str2)
      axios
      .post(`${base_url}/section/save`, {
        entryId:Math.floor(Math.random()*100),
        username: sessionStorage.getItem("username"),
        sectionId: "section4",
        responseTime: "",
        response: str2
      })
      .then(
        (response) => {
          console.log(response);
          console.log("success");
            // toast.success("Data has been added");
        },
        (error) => {
          console.log(error);
          console.log("error");
          // toast.success("Something went wrong");
        }
      );
  };
  return (
    <Container>
          <div className="app_section mb-5">
            <div style={{ marginLeft: "5%", marginRight: "5%" }}>
              <Fragment>
                <ToastContainer />
                <h1 className="text-center my-3 fs-3">Section-4</h1>
                <Form onSubmit={handleForm}>
                  <FormGroup className="mx-5 my-5">
                    <label
                      htmlFor="ques1"
                      className="form-label mx-2 my-3 fw-bold"
                    >
                      Over a causal meeting at the canteen, your manager
                      mentions to you and your team mates that the company is
                      facing a tough time these days and that the management is
                      concerned about overall cutting of costs. You begin to
                      feel tense and worried, unable to concentrate on the rest
                      of the conversation and eventually start feeling sad. Your
                      thought on hearing these words before feeling sad and
                      tense are: 'He means I will lose my job and they will be
                      asking me to leave. This certainly is the end of the road
                      for me. I am doomed now, I will never get a job'. You are
                      likely to be using the cognitive error of:
                    </label>
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques1"
                      id="q1opt1"
                      onClick={(e) => {
                        setCourse({ ...course, q1: e.target.id });
                      }}
                      required
                    ></Input>
                    Labeling
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques1"
                      id="q1opt2"
                      onClick={(e) => {
                        setCourse({ ...course, q1: e.target.id });
                      }}
                    ></Input>
                    Disqualifying the positive
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques1"
                      id="q1opt3"
                      onClick={(e) => {
                        setCourse({ ...course, q1: e.target.id });
                      }}
                    ></Input>
                    Jumping to conclusion
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques1"
                      id="q1opt4"
                      onClick={(e) => {
                        setCourse({ ...course, q1: e.target.id });
                      }}
                    ></Input>
                    Personalization
                    <br />
                  </FormGroup>
                  <hr style={{ backgroundColor: "cream", height: "4px" }} />

                  <FormGroup className="mx-5 my-5">
                    <label
                      htmlFor="ques2"
                      className="form-label mx-2 my-3 fw-bold"
                    >
                      You have been asked to make a short speech at your
                      friend's farewell party and the gathering consists of a
                      few close friends. As you start getting up to speak, you
                      notice your heart pounding, your face is getting flushed.
                      You feel tense and nervous and you tell yourself 'I am
                      feeling so tense, I am sure the speech will go wrong and I
                      will go blank and end up making a fool of myself.Everybody
                      will think that I am incapable of doing this small
                      activity.' You are likely to be using the distortions of
                    </label>
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques2"
                      id="q2opt1"
                      onClick={(e) => {
                        setCourse({ ...course, q2: e.target.id });
                      }}
                    ></Input>
                    Emotional reasoning
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques2"
                      id="q2opt2"
                      onClick={(e) => {
                        setCourse({ ...course, q2: e.target.id });
                      }}
                    ></Input>
                    Disqualifying the positive
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques2"
                      id="q2opt3"
                      onClick={(e) => {
                        setCourse({ ...course, q2: e.target.id });
                      }}
                    ></Input>
                    Jumping to conclusion
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques2"
                      id="q2opt4"
                      onClick={(e) => {
                        setCourse({ ...course, q2: e.target.id });
                      }}
                    ></Input>
                    Personalization
                    <br />
                  </FormGroup>
                  <hr style={{ backgroundColor: "cream", height: "4px" }} />

                  <FormGroup className="mx-5 my-5">
                    <label
                      htmlFor="ques3"
                      className="form-label mx-2 my-3 fw-bold"
                    >
                      You have postponed writing a report needed at your office.
                      Every night when you try to get down to it, the whole
                      project seems so difficult that you end up doing something
                      else instead. Every time you think of starting, you put it
                      off by telling yourself: 'unless I have all the
                      information I need, I cannot start, I must have everything
                      which is required before I begin working on it. I must be
                      sure of what I am doing'. As the day of submission
                      deadline comes closer, you begin to feel overwhelmed and
                      guilty. Your thinking errors include:
                    </label>
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques3"
                      id="q3opt1"
                      onClick={(e) => {
                        setCourse({ ...course, q3: e.target.id });
                      }}
                    ></Input>
                    Jumping to conclusions (fortune teller error)
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques3"
                      id="q3opt2"
                      onClick={(e) => {
                        setCourse({ ...course, q3: e.target.id });
                      }}
                    ></Input>
                    All or none thinking
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques3"
                      id="q3opt3"
                      onClick={(e) => {
                        setCourse({ ...course, q3: e.target.id });
                      }}
                    ></Input>
                    Shoulds and musts
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques3"
                      id="q3opt4"
                      onClick={(e) => {
                        setCourse({ ...course, q3: e.target.id });
                      }}
                    ></Input>
                    Magnification
                    <br />
                  </FormGroup>
                  <hr style={{ backgroundColor: "cream", height: "4px" }} />

                  <FormGroup className="mx-5 my-5">
                    <label
                      htmlFor="ques4"
                      className="form-label mx-2 my-3 fw-bold"
                    >
                      Your job interview did not go as well as you expected, the
                      offer did not come through, as the company explained that
                      they wanted somebody with a different set of
                      qualifications. Although you felt bad, you understand that
                      the reasons were valid. However now that you have another
                      offer, you start feeling anxious and tense, and wonder if
                      you shouldn't go for the interview. This is because you
                      think 'I am sure the same thing that happened the last
                      time will happen again, there is no point in going there.'
                      Your distortions include:
                    </label>
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques4"
                      id="q4opt1"
                      onClick={(e) => {
                        setCourse({ ...course, q4: e.target.id });
                      }}
                    ></Input>
                    All or none thinking
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques4"
                      id="q4opt2"
                      onClick={(e) => {
                        setCourse({ ...course, q4: e.target.id });
                      }}
                    ></Input>
                    Mislabeling
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques4"
                      id="q4opt3"
                      onClick={(e) => {
                        setCourse({ ...course, q4: e.target.id });
                      }}
                    ></Input>
                    Overgeneralization
                    <br />
                    <Input className="mx-2"
                      type="radio"
                      name="ques4"
                      id="q4opt4"
                      onClick={(e) => {
                        setCourse({ ...course, q4: e.target.id });
                      }}
                    ></Input>
                    Fortune telling
                    <br />
                    <br />
                    <br />
                  </FormGroup>

                  <Container className="text-center">
                  <Link to={sessionStorage.getItem("nextOfSec4")}>
                <Button
                    type="button"
                    color="success"
                    onClick={disable}
                    className="btn-lg"
                  >
                    Next Section
                  </Button>
                </Link>
                <Button
                    type="button"
                    color="success"
                    onClick={handleForm}
                    className="btn-lg"
                  >
                    Submit
                  </Button>
                <Button
                      type="reset"
                      color="warning ms-2"
                      className="btn-lg"
                    >
                      Clear
                    </Button>
                  </Container>
                </Form>
              </Fragment>
            </div>
          </div>
    </Container>
  );
};

export default Section4;
