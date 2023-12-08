import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Navigationbar from "../Navigationbar/Navigationbar";

import "./Contact.css";
import contactBG from "./Contact-Bg.png";
const Contact = () => {
  return (
    <div className="custom-container" style={{ background: "linear-gradient(to top, #A0C7FF 0%, #F9F9F9 30%, #F9F9F9 70%, #FFFFFF 100%)" }}>
      {/* <Header /> */}
      <Navigationbar />
      <ContactSection />
      <Footer />
    </div>
  );
};

const ContactSection = () => {
  return (
    <Container fluid className="main-container">
      <Row className="justify-content-around">
        <Col md={4} className="d-flex flex-column align-items-center justify-content-center">
          <h1 className="mb-4">Let's Talk</h1>
          <p className="mb-4">Don’t worry, ask us any question about our service, fill all the blanks and our team will reach out after reviewing your inquiry!</p>
          <img src={contactBG} className="d-inline-block align-top logo_LoanEase img-fluid px-2 d-none d-md-block" style={{ maxWidth: "500px", padding: "10px" }} alt="LoanEase" />
        </Col>
        <Col md={6}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

const ContactForm = () => {
  return (
    <div className="container  border border-2 rounded rounded-5" style={{ backgroundColor: "#F9F9F9" }}>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <form style={{ padding: "10px" }}>
            <div className="form-group d-flex flex-column align-items-start mb-3">
              <label className="color-primary" htmlFor="name">
                What's your name?
              </label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group d-flex flex-column align-items-start mb-3">
              <label className="color-primary" htmlFor="email">
                How we can contact you?
              </label>
              <input type="email" className="form-control" id="email" placeholder="example@email.com" required />
            </div>
            <div className="form-group d-flex flex-column align-items-start mb-3">
              <label className="color-primary" htmlFor="location">
                Location
              </label>
              <input type="text" className="form-control" id="location" placeholder="Enter your location" required />
            </div>
            <div className="form-group d-flex flex-column align-items-start mb-3">
              <label className="color-primary" htmlFor="subject">
                What is your inquiry about?
              </label>
              <input type="text" className="form-control" id="subject" placeholder="Enter topic" required />
            </div>
            <div className="form-group d-flex flex-column align-items-start mb-3">
              <label className="color-primary" htmlFor="message">
                Tell us everything
              </label>
              <textarea className="form-control" id="message" rows="5" placeholder="Type Something" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary px-5 rounded rounded-5">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
