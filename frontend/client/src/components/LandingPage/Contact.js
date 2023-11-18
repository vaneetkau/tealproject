// ContactPage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const Contact = () => {
  return (
    <div>
      <Header />
      <ContactSection />
      <Footer />
    </div>
  );
};

const ContactSection = () => {
  return (
    <Container fluid style={{ height: '100vh', backgroundColor:'#F4F4F4' }}>
      <Row>
        <Col>
          <h1>Let's Talk</h1>
          <p>
            Don’t worry, ask us any question about our service, fill all the
            blanks and our team wi’ll reach out after reviewing your inquiry!
          </p>
          <img
            src="path/to/your/image.jpg"
            alt="Description"
          />
        </Col>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

const ContactForm = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>How we can contact you?</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>How we can contact you?</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicLocation">
        <Form.Label>Where are you Located?</Form.Label>
        <Form.Control type="text" placeholder="Enter Location" />
      </Form.Group>

      <Form.Group controlId="formBasicTopic">
        <Form.Label>What is your Inquiry About?</Form.Label>
        <Form.Control type="text" placeholder="Enter your Topic" />
      </Form.Group>

      <Button className='btn btn-lg btn-primary p-4 m-4 ' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
