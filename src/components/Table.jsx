import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {

  render() {
    console.log("Table " + this.props.color)
    const rows = () => this.props.rows.map((row, index) => {
      return <TableRow key={index} columns={this.props.columns} row={index} color={this.props.color}
      handleMouseDown={this.props.handleMouseDown}
      handleMouseUp={this.props.handleMouseUp}
      handleMouseOver={this.props.handleMouseOver}
      />
    });

    return <table><tbody key={0}>{rows()}</tbody></table>;
  }
}
export default Table;
