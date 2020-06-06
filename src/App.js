import React, { Component } from "react";
import Table from "./components/Table";
import {  Button, NavDropdown, Nav } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#FFFFFF",
      rows: [0],
      columns: [0],
    };
    this.handleAddRow = this.handleAddRow.bind(this);

  }

  handleAddRow = () => {
    this.setState((state) => {
      const rows = state.rows.concat(state.rows.length);
      return {
        color: state.color,
        rows: rows,
        columns: state.columns,
      };
    });
  };

  handleAddColumn = () => {
    this.setState((state) => {
      const columns = state.columns.concat(state.columns.length);
      return {
        color: state.color,
        rows: state.rows,
        columns: columns,
      };
    });
  }

  handleRemoveRow = () => {
    this.setState((state) => {
      const rows = state.rows.slice(0, state.rows.length - 1);
      return {
        color: state.color,
        rows: rows,
        columns: state.columns,
      };
    });
  }

  handleRemoveColumn = () => {
    this.setState((state) => {
      const columns = state.columns.slice(0, state.rows.length - 1);
      return {
        color: state.color,
        rows: state.rows,
        columns: columns,
      };
    });
  }

  componentDidMount() {
    
  }


  render() {
    return (
      <>
        <Nav>
            <Nav className="mr-auto navbar-start">
              <Button onClick={this.handleAddColumn}>Add Column</Button>
              <Button>Remove Column</Button>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item>Blue</NavDropdown.Item>
                <NavDropdown.Item>Red</NavDropdown.Item>
                <NavDropdown.Item>White</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Button onClick={this.handleAddRow}>Add Row</Button>
              <Button onClick={this.handleRemoveRow}>Remove Row</Button>
            </Nav>
        </Nav>
        <Table onClick={this.addRow} rows={this.state.rows} columns={this.state.columns}/>
      </>
    );
  }
}

export default App;
