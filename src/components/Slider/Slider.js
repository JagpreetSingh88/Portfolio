import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "animate.css";
import { motion } from "framer-motion";
import { Link, Navigate } from "react-router-dom";
import TrackVisibility from "react-on-screen";
import "./slider.css";
import left from "../../images/left.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { ArrowDownCircle } from "react-bootstrap-icons";
import ComputerCanvas from "../canvas/Computers";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { Styles } from "../styles/Style";

const Slider = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX designer"];
  const [text, setText] = useState("");

  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let UpdatedText = isDeleted
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(UpdatedText);

    if (isDeleted) {
      setDelta((prevState) => prevState / 2);
    }
    if (!isDeleted && UpdatedText === fullText) {
      setIsDeleted(true);
      setDelta(period);
    } else if (isDeleted && UpdatedText === "") {
      setIsDeleted(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="home" className="banner">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animated__animated animate__fadeIn" : ""
                  }
                >
                  <h1>
                    {`Hi I am a `}
                    <span className="wrapper text-purple-800">{text}</span>
                  </h1>
                  <p>
                    {" "}
                    I really appreciate your presence on my website, so this is
                    a quick glance of my skills as a 3D developer with high end
                    technologies, such as:- React, three.js and react framer
                    motion and fibre along with some backend with node.js and
                    express.
                    <br />
                    <br />
                    <span>Wanted to have one </span>
                    <div className="inline-flex items-center mx-auto">
                      <ArrowDownCircle size={25} className=" animate-bounce"/>
                    </div>
                  </p>
                  <a href="#contact">
                    <button className="btn p-2 flex flex-col items-center">
                      Let's Connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} sm={12} md={6} xl={5} className="RightImg ">
            <ComputerCanvas />
          </Col>
        </Row>
        <div className="sm:hidden ml-48 ">
          <a href="#skills">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.dev
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeateType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary"
              ></motion.dev>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Slider;
