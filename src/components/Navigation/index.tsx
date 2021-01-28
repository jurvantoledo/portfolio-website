import React from "react"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
    return (
        <Navbar bg="light" expand="lg">

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ width: "100%" }} fill>
                <li>Home</li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }