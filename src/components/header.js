import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <Navbar className="nav" bg="light" expand="lg">
      <h1> John Doe </h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">About</Nav.Link>

          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">project 1</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">project 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">project 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">project 4</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
