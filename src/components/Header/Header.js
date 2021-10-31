import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
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
            <Nav.Link className="text-white" as={Link} to="/myOrders">
              My Orders
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/addPackage">
              Add Package
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/manageOrder">
              Manage All Order
            </Nav.Link>

            {user?.email ? (
              <Nav.Link className="text-white" onClick={logOut}>
                <FontAwesomeIcon icon={faSignOutAlt} className="text-danger" />
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link className="text-white" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Nav.Link className=" px-3 text-white">
              {user?.displayName}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
