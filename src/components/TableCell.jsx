import React, { Component } from "react";
import '../styles/Table.css' 

class TableCell extends Component {

  
  componentDidMount() {
  }

  render() {
    console.log("table cell" + this.props.color)
    return (<td className="uncolored" 
    onClick={(e) => e.target.className = this.props.color}
    handleMouseDown = {this.props.handleMouseDown}
    handleMouseOver = {this.props.handleMouseOver}
    handleMouseUp = {this.props.handleMouseUp}
    >
    </td>);
  }
}

export default TableCell;
