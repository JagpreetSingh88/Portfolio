import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "animate.css";
import { Styles } from "../styles/Style";
import TrackVisibility from "react-on-screen";
import "./Skill.css";
import { brand, ui, web, interact, marketing } from "../../assets/skills";
import "react-multi-carousel/lib/styles.css";
const Skill = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} xl={12}>
            <div className="skill-box">
              <h2 className={Styles.sectionHeadText}>Skills</h2>
              <p className={Styles.sectionSubText}>
                The passion for coding never dies and the enthusiasm for coding
                always keeps on growing so till now I have got expertise in{" "}
                <span>
                  HTML, CSS, JAVASCRIOT,REACT,NODE,THREE JS,PYTHON,DJANGO AND
                  ANY MORE languages{" "}
                </span>
                , which inturn helps me to build a professinal and stunning
                websites.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={300}
                className="skill-slider "
              >
                <div className="item flex flex-col items-center text-center">
                  <img src={web} alt="no" />
                  <h5>Web development</h5>
                </div>
                <div className="item flex flex-col items-center text-center">
                  <img src={ui} alt="no" />
                  <h5>UI/UX design</h5>
                </div>
                <div className="item flex flex-col items-center text-center">
                  <img src={brand} alt="no" />
                  <h5>Brand endorsement</h5>
                </div>
                <div className="item flex flex-col items-center text-center">
                  <img src={marketing} alt="no" />
                  <h5>Digital Marketing</h5>
                </div>

                <div className="item flex flex-col items-center text-center">
                  <img src={interact} alt="no" />
                  <h5>Interactive Sites</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skill;
