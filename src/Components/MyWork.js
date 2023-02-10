import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import codetej from "../Images/codetej.png";
import kokanspecial from "../Images/kokan-special.png";
import { Icon } from "@iconify/react";

function MyWork() {
  return (
    <Container style={{marginTop: "100px"}}>
      <Row>
        <Col xs={6}>
          <Row>
            <Col xs={6}>
              <div className="work-so-far">
                <div>
                  <Card style={{ backgroundColor: "#fff" }}>
                    <Card.Img variant="top" src={codetej} />
                    <Card.Body>
                      {/* Title and Live btn */}
                      <Card.Title className="card-title">Codetej</Card.Title>

                      <Row className="visit-btn">
                        <Col xs={6}>
                          <div className="date-sitetype">
                            <div style={{ fontSize: "10px" }}>
                              Blogging Site
                            </div>
                            <div
                              style={{ fontSize: "12px", fontWeight: "600" }}
                            >
                              10<sup>th</sup> April 2021
                            </div>
                          </div>
                        </Col>
                        <Col xs={6} align="right">
                        <a href="https://codetej.in/"><Button variant="dark">
                            Visit{" "}
                            <span
                              style={{
                                backgroundColor: "#212529",
                                fontSize: "14px",
                              }}
                            >
                              <Icon
                                icon="material-symbols:arrow-circle-right-rounded"
                                color="white"
                              />
                            </span>
                          </Button></a>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="work-so-far">
                <div>
                  <Card style={{ backgroundColor: "#fff" }}>
                    <Card.Img variant="top" src={kokanspecial} />
                    <Card.Body>
                      {/* Title and Live btn */}
                      <Card.Title className="card-title">KokanSpecial</Card.Title>

                      <Row className="visit-btn">
                        <Col xs={6}>
                          <div className="date-sitetype">
                            <div style={{ fontSize: "10px" }}>
                              Blogging Site
                            </div>
                            <div
                              style={{ fontSize: "12px", fontWeight: "600" }}
                            >
                              10<sup>th</sup> April 2021
                            </div>
                          </div>
                        </Col>
                        <Col xs={6} align="right">
                        <a href="https://kokanspecial.github.io/"><Button variant="dark">
                            Visit{" "}
                            <span
                              style={{
                                backgroundColor: "#212529",
                                fontSize: "14px",
                              }}
                            >
                              <Icon
                                icon="material-symbols:arrow-circle-right-rounded"
                                color="white"
                              />
                            </span>
                          </Button></a>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <div className="mywork-content">
            <div className="mywork-heading">
              <h5 style={{ marginLeft: "200px", fontWeight: "bold" }}>
                My Work
              </h5>
            </div>
            <div className="mywork-text" style={{ marginTop: "50px" }}>
              <p>
              I have created several projects from my graduation to this date. Some of them were desktop applications, and websites. I do run my personal blog site, where I post courses or blogs related to technology. 
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyWork;
