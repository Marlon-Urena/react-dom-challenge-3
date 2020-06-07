import React, { Component } from "react";
import '../styles/Table.css' 

class TableCell extends Component {

  componentDidMount() {
  }

  render() {
    console.log("table cell" + this.props.color)
    return (<td className="uncolored" onClick={(e) => e.target.className = this.props.color}
    handleMouseDown = {this.props.handleMouseDown} handleMouseUp={this.props.handleMouseUp} handleMouseOver={this.props.handleMouseOver}
    ></td>);
  }
}

export default TableCell;
