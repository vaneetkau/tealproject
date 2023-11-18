import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
 return (
    <Container fluid className="bg-primary p-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="border-0">
            <Card.Body>
              <h1 className="text-center">Loan Ease</h1>
              <h2 className="text-center">Discover, Apply, Ease your Budget</h2>
              <p className="text-center">Get Help To Ease Your Studies, Just Discover, Apply And Ease Your Budget!</p>
              <Button className="mt-3" variant="primary" size="lg" block>
                Begin Today!
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
 );
}

export default Main;