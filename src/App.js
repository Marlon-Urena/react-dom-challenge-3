import React, { Component } from "react";
import Table from "./components/Table";
import {  Button, NavDropdown, Nav } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      rows: [0],
      columns: [0],
      isDragged: false,
    };
    this.handleAddRow = this.handleAddRow.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.currentColor = React.createRef();

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

  handleMouseDown = (event) => {
    event.target.style.backgroundColor = this.state.color;
    this.setState({isDragged: true})
  }

  handleMouseOver = (event) => {
    if(this.state.isDragged)
      event.target.style.backgroundColor= this.state.color
  }

  handleMouseUp = (event) => {
    this.setState({isDragged: false})
  }

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
      const columns = state.columns.slice(0, state.columns.length - 1);
      return {
        color: state.color,
        rows: state.rows,
        columns: columns,
      };
    });
  };

  handleChangeColor = (color) => {
    this.setState({color: color});
  };

  fillCellsWithColor = () => {
    let cells = this.state.columns;
    for(let i = 0; i < cells.length; i++)
    {
      if(cells[i].className === "uncolored")
      {
        cells[i].className = this.state.color
      }

      return cells;
    }
  }

  componentDidMount() {
    
  }


  render() {
    return (
      <>
        <Nav>
            <Nav className="mr-auto navbar-start" onSelect={this.handleChangeColor}>
              <Button onClick={this.handleAddColumn}>Add Column</Button>
              <Button onClick={this.handleRemoveColumn}>Remove Column</Button>
              
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item eventKey="blue">Blue</NavDropdown.Item>
                <NavDropdown.Item eventKey="red">Red</NavDropdown.Item>
                <NavDropdown.Item eventKey="white">White</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Button onClick={this.handleAddRow}>Add Row</Button>
              <Button onClick={this.handleRemoveRow}>Remove Row</Button>
            </Nav>
        </Nav>
        <Table color={this.state.color} rows={this.state.rows} columns={this.state.columns}
        isDragged={this.isDragged}
        handleMouseDown={this.handleMouseDown}
        handleMouseUp={this.handleMouseUp}
        handleMouseOver={this.handleMouseOver}
        />
      </>
    );
  }
}

export default App;
