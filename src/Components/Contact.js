import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <Container style={{ marginTop: "100px", border: "2px solid #000" }}>
      <Row>
        <div className="contact-content">
          <div className="contact-heading">
            <h5 style={{ marginLeft: "200px", fontWeight: "bold" }}>
              Tech Stack
            </h5>
          </div>
          <div className="contact-form">
            <Form>
                <Col xs={4}>
                
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              </Col>
            <Col xs={4}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              </Col>
              <Col xs={4}>
              <Form.Group className="mb-3" controlId="formBasicSubject">
               <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
              </Col>
              <Col xs={4}>
              <Form.Group className="mb-3" controlId="formBasicSubject">
               <Form.Control as="textarea" rows="4" placeholder="Message" />
              </Form.Group>
              </Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Contact;
