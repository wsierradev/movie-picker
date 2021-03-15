import React, { useState,useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";
import axios from "axios";

export default function Header() {
  const [categories, setCategories] = useState([1,2,3,4,5]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios(
        'https://random-movie-picker-kazan.herokuapp.com/categories',
      );

      setCategories(res.data);
    };
 
    fetchCategories();
  }, []);

  return (
    <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Movie Night</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item as="li"><Link to="/random/" className="nav-link">Random Movie</Link></Nav.Item>
          <Nav.Item as="li"><Link to="/list/" className="nav-link">Movie List</Link></Nav.Item>
          <Nav.Item as="li"><Link to="/addMovie/" className="nav-link">Add Movie</Link></Nav.Item>

        <NavDropdown title="Categories" id="basic-nav-dropdown">
        {categories.map((category) => 
  <NavDropdown.Item key="ß" as="li"><Link to= {`/${category.value}/`} className="nav-link">{category.display}</Link></NavDropdown.Item>
   )}
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>

          {/* {categoryList} */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>  )

}