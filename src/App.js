import React, { Component } from "react";
import Table from "./components/Table";
import { Navbar, Button, NavDropdown, Nav } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#FFFFFF",
    };
  }

  handleNavControl = (name) => {};

  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navbar-start">
              <Button>Add Column</Button>
              <Button>Remove Column</Button>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item>Blue</NavDropdown.Item>
                <NavDropdown.Item>Red</NavDropdown.Item>
                <NavDropdown.Item>White</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Button>Add Row</Button>
              <Button>Remove Row</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="App">
          <Table />
        </div>
      </>
    );
  }
}

export default App;
