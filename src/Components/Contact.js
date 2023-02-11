import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Icon } from "@iconify/react";

function Contact() {
  return (
    <Container
      className="contact"
      id="contact"
      style={{ marginTop: "100px", border: "2px solid #000", padding: "40px" }}
    >
      <Row>
        <Col>
          <div className="contact-content">
            <div className="contact-heading">
              <h5 style={{ marginLeft: "200px", fontWeight: "bold" }}>
                Contact Me
              </h5>
            </div>
            <div className="contact-form">
              <Form style={{ marginLeft: "100px" }}>
                <Col xs={8}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>
                </Col>
                <Col xs={8}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
                </Col>
                <Col xs={8}>
                  <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>
                </Col>
                <Col xs={8}>
                  <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Control
                      as="textarea"
                      rows="4"
                      placeholder="Message"
                    />
                  </Form.Group>
                </Col>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>

            <div className=""></div>
          </div>
        </Col>
        <Col>
          <div className="contact-content">
            <div className="contact-heading">
              <h5 style={{ marginLeft: "100px", fontWeight: "bold" }}>
                Get In Touch
              </h5>
            </div>
            <div className="get-in-touch-upper">
              <Row style={{marginBottom: "10px"}}>
                <Col xs={2}>
                  <Icon icon="material-symbols:phone-in-talk-watchface-indicator" />
                </Col>
                <Col>+91 9321819721</Col>
              </Row>
              <Row style={{marginBottom: "10px"}}>
                <Col xs={2}>
                  <Icon icon="mdi:email-outline"/>
                </Col>
                <Col>tejashatle3@gmail.com</Col>
              </Row>
            </div>

            <div className="get-in-touch-bottom">
              <Row className="social-icons" style={{marginBottom: "10px"}}>
                <Col xs={2}><a href="https://www.facebook.com/tejas.m.hatle"><Icon icon="mingcute:facebook-line"/></a></Col>
                <Col xs={2}><a href="https://www.linkedin.com/in/tejas-hatle-84b691148/"><Icon icon="ri:linkedin-box-line"/></a></Col>
                <Col xs={2}><a href="https://github.com/tejashatle"><Icon icon="iconoir:github-circle"/></a></Col>
                <Col xs={2}><a href="https://www.instagram.com/tejashatle2609/"><Icon icon="uil:instagram"/></a></Col>
                
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
