import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Icon } from "@iconify/react";
import soapui from "../Images/soap ui.png";
import Image from "react-bootstrap/Image";

function TechStack() {
  return (
    <Container style={{marginTop: "100px"}} id='tech-stack'>
      <Row>
        <Col sm={6}>
          <div className="techstack-content">
            <div className="techstack-heading">
              <h5 style={{ fontWeight: "bold" }}>Tech Stack</h5>
            </div>
            <div className="techstack-text" style={{ marginTop: "50px"}}>
              <p>
                I am working on banking domain in my current tech company. Where
                we use frameworks like Spring MVC, JSP, jQuery, Java, CSS,
                Liferay, SOAP services to develop the applications. Earlier, in
                my training period I got a chance to explore some advanced
                framework and libraries like Spring Boot, React.js, and Rest
                Services.
              </p>
            </div>
          </div>
        </Col>
        <Col sm={6} style={{marginTop: "70px"}}>
          <Row>
            <Col sm={4}>
              <div className="tech-container">
                <div className="technology">
                  <div className="icon">
                    <Icon icon="logos:spring-icon" />
                  </div>
                  <div className="name">Spring MVC</div>
                </div>

                <div className="technology">
                  <div className="icon">
                    <Icon icon="bxl:jquery" />
                  </div>
                  <div className="name">jQuery</div>
                </div>

                <div className="technology">
                  <div className="icon">
                  <Image src={soapui} className="soap-ui-icon"/>
                  </div>
                  <div className="name">SOAP UI</div>
                </div>
              </div>
            </Col>
            <Col sm={4}>
                <div className="tech-container">
                <div className="technology">
                  <div className="icon">
                    <Icon icon="logos:java" />
                  </div>
                  <div className="name">Java</div>
                </div>

                <div className="technology">
                  <div className="icon">
                    <Icon icon="vscode-icons:file-type-css" />
                  </div>
                  <div className="name">CSS</div>
                </div>
                </div>
            </Col>
            <Col sm={4}>
            <div className="tech-container">
                <div className="technology">
                  <div className="icon">
                    <Icon icon="logos:javascript" />
                  </div>
                  <div className="name">Javascript</div>
                </div>

                <div className="technology">
                  <div className="icon">
                    <Icon icon="vscode-icons:file-type-reactjs" />
                  </div>
                  <div className="name">React.js</div>
                </div>
                </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TechStack;
