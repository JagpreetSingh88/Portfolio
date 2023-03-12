import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./contact.css";
import contactImg from "../../images/contact.jpg";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { SectionWrapper } from "../hoc";
import { Styles } from "../styles/Style";
import InputGroup from "react-bootstrap/InputGroup";
import GlobeCanvas from "../canvas/Globe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();
  const formInitial = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  };
  const [buttonText, setButtonText] = useState("Send");
  const [data, setData] = useState(formInitial);
  const onChangeData = (name, value) => {
    setData({ [name]: value });
  };
  const HandleClick = async (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.message) {
      toast.error("Enter valid details");
    } else {
      setButtonText("Sending");

      emailjs
        .sendForm(
          "service_vzu7p38",
          "template_uncmbm1",
          form.current,
          "YU_Ifo1aIMBNpSsVh"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setButtonText("Sent");
      setData(formInitial);
      toast.success("Thanks for sending,We'll revert shortly!");
      setButtonText("Send");
    }
  };
  return (
    <section className="contactUs bg-tertiary">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <GlobeCanvas />
          </div>
          <div>
            <h1 className={Styles.heroHeadText}>Get In Touch</h1>
            <Form ref={form} className="form" id="contact">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className="input placeholder:Styles.heroSubText"
                  placeholder="Please enter your first name..."
                  value={data.name}
                  name="user_name"
                  required
                  type="name"
                  onChange={(e) => onChangeData("name", e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="input placeholder:Styles.heroSubText"
                  placeholder="Please enter your email ID..."
                  value={data.email}
                  required
                  type="email"
                  name="user_email"
                  onChange={(e) => onChangeData("email", e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  className="input placeholder:Styles.heroSubText"
                  value={data.phoneNumber}
                  placeholder="Please enter your phone Number..."
                  name="user_phone"
                  required
                  type="number"
                  onChange={(e) => onChangeData("phone Number", e.target.value)}
                />
              </Form.Group>
              <InputGroup>
                <InputGroup.Text>Message</InputGroup.Text>
                <Form.Control
                  className="input placeholder:Styles.heroSubText"
                  as="textarea"
                  required
                  name="message"
                  value={data.message}
                  placeholder="Please leave a message for us..."
                  onChange={(e) => onChangeData("message", e.target.value)}
                  aria-label="With textarea"
                />
              </InputGroup>
              <Button
                variant="primary"
                type="submit"
                className="btn m-2 mt-4"
                onClick={(e) => HandleClick(e)}
              >
                {buttonText}
              </Button>
              <ToastContainer />
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
