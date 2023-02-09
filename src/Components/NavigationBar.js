import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Navbar style={{ background: "#F1F1F1" }} className="nav-fg" collapseOnSelect expand="lg" variant="dark"  fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ fontWeight: "bolder", color: "#000"}} >TEJAS HATLE</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='active'>About</Nav.Link>
            <Nav.Link >Tech Stack</Nav.Link>
            <Nav.Link >My Work</Nav.Link>
            <Nav.Link >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;