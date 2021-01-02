import React from "react"
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"




export default function Header() {
  return (
    <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Movie Night</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item as="li"><Link to="/random/">Random Movie</Link></Nav.Item>
          <Nav.Item as="li"><Link to="/list/">Movie List</Link></Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>  )

}