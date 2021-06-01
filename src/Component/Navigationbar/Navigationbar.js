import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="/home">Schema Builder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5 pr-5">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/project">Project</Nav.Link>
            <Nav.Link href="/entity">Entity</Nav.Link>
            <Nav.Link href="/layer">Layer</Nav.Link>
            <Nav.Link href="/preset">Presets</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
