import { Container, Row, Toast, ToastContainer } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Icon } from "@iconify/react";
import emailjs from 'emailjs-com';
import { useState, useRef} from "react";

function Contact(e) {
  
  const form = useRef();
  const [alert, setAlert] = useState({ show: false, message: '', success: false });

  const toggleToast = () => setAlert({show: false, success: true});

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_p8jiks2', 'template_u25hn7f', form.current, 'HDZOiVaGNj7Qk_Ia4')
      .then((result) => {
        setAlert({
          show: true,
          message: 'Thanks for reaching out to me, will reply you soon. Thanks!',
          success: true,
      });
        document.getElementById("contactForm").reset();
          console.log("Mail sent"); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {

        setAlert({
          show: true,
          message: 'Oops! Something went wrong, try reaching out on social media. Thanks!',
          success: false,
      });
          console.log(error.text);
      });
    }

 
   
  return (
    <Container
      className="contact"
      id="contact"
      style={{ border: "2px solid #000", padding: "40px" }}
    >
      <ToastContainer position="top-start" containerPosition="fixed" style={{ marginTop: "60px", marginLeft: "40px" }}>
        <Toast show={alert.show} onClose={toggleToast}  bg={alert.success ? 'success' : "danger"} delay={3000} autohide>
          <Toast.Header closeButton={false}>{alert.message} {alert.show}</Toast.Header>
        </Toast>
      </ToastContainer>
      <Row>
        <Col>
          <div className="contact-content">
            <div className="contact-heading">
              <h5 style={{ fontWeight: "bold" }}>
                Contact Me
              </h5>
            </div>
            <div className="contact-form">
              <Form ref={form} onSubmit={sendEmail} id="contactForm" >
                <Col sm={8}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Your Name" name="from_name"/>
                  </Form.Group>
                </Col>
                <Col sm={8}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="email" placeholder="Your Email" name="from_email" />
                  </Form.Group>
                </Col>
                <Col sm={8}>
                  <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Control type="text" placeholder="Subject" name="subject"/>
                  </Form.Group>
                </Col>
                <Col sm={8}>
                  <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Control
                      as="textarea"
                      rows="4"
                      placeholder="Message"
                      name="message"
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
              <h5 style={{ fontWeight: "bold" }}>
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
                <Col>tejashatle2@gmail.com</Col>
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
