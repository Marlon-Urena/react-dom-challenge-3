import React, { Component } from "react";
import '../styles/Table.css' 

class TableCell extends Component {

  componentDidMount() {
  }

  changeColor() {
    
  }

  render() {
    return (<td className="pixel uncolored" onClick={this.changeColor}></td>);
  }
}

export default TableCell;
