import React from "react"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./navigation.scss"

export default function Navigation() {
    return (
        <Navbar expand="lg">

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ width: "100%" }} fill>
             <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#about-me">About</a></li>
                <li><a href="#technologies">Technologies</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
             </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }