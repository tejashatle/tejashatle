import { Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import avtar from "../Images/avtar-3.png";
import Col from 'react-bootstrap/Col';

function About() {
    return(
        <Container id="about">
            <Row>
                <Col sm={6}>
                    <Image src={avtar} className="image-dimensions" />
                </Col>
                <Col sm={6}>
                    <div className="about-content">
                        <div className="about-heading">
                            <span>Hi There!</span>
                        </div>
                        <div className="about-text">
                            <p>
                                I am Tejas, a Software Developer from Mumbai, India. I am currently working in a tech company. I have 2+ experience in this industry. Apart from the development I am passionate about website and app designing as well.  
                            </p>
                        </div>
                    </div>
                    
                </Col>
            </Row>
            
        </Container>
    );
}

export default About;