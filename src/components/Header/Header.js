import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="bg-black" collapseOnSelect sticky="top" expand="lg ">
      <Container>
        <Navbar.Brand as={Link} className="fw-bold fs-2 text-white" to="/">
          HABIB TOUR BD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="text-white" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/packages">
              Our package
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/doctors">
              ......
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/appointment">
              .....
            </Nav.Link>

            {/* {(<Nav.Link className="text-white">
              <FontAwesomeIcon icon={faSignOutAlt} />
              Logout
            </Nav.Link>)(
              <Nav.Link className="text-white" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Nav.Link className=" px-3 text-white"></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
