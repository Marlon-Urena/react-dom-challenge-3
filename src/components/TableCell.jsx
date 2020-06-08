import React, { Component } from "react";
import '../styles/Table.css' 

class TableCell extends Component {

  
  componentDidMount() {
  }

  render() {
    console.log("table cell" + this.props.color)
    return (<td className="uncolored" 
    onClick={(e) => e.target.className = this.props.color}
    onMouseDown = {this.props.handleMouseDown}
    onMouseOver = {this.props.handleMouseOver}
    onMouseUp = {this.props.handleMouseUp}
    >
    </td>);
  }
}

export default TableCell;
