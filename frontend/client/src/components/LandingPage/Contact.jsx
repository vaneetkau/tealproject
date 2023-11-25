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
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor:'#F4F4F4' }}>
      <Row>
        <Col md={6} className="text-center">
          <h1 className="mb-4">Let's Talk</h1>
          <p className="mb-4">
            Don’t worry, ask us any question about our service, fill all the
            blanks and our team will reach out after reviewing your inquiry!
          </p>
          <img
            src="path/to/your/image.jpg"
            alt="Description"
            className="img-fluid"
          />
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
<Form>
 <Form.Group controlId="formBasicName">
    <Form.Label className="mb-2">How can we contact you?</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
 </Form.Group>

 <Form.Group controlId="formBasicEmail">
    <Form.Label className="mb-2">Email Address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted mb-3">
      We'll never share your email with anyone else.
    </Form.Text>
 </Form.Group>

 <Form.Group controlId="formBasicLocation">
    <Form.Label className="mb-2">Where are you located?</Form.Label>
    <Form.Control type="text" placeholder="Enter location" />
 </Form.Group>

 <Form.Group controlId="formBasicTopic">
    <Form.Label className="mb-2">What is your inquiry about?</Form.Label>
    <Form.Control type="text" placeholder="Enter your topic" />
 </Form.Group>

 <Button className='btn btn-lg btn-primary p-4 m-4 rounded-pill' variant="primary" type="submit">
    Submit
 </Button>
</Form>
  );
};

export default Contact;
