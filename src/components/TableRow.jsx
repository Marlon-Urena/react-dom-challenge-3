import React, { Component } from "react";
import TableCell from "./TableCell";

class TableRow extends Component {
  render() {
    const columns = () =>
      this.props.columns.map((column, index) => {
        console.log(column.toString(10) + "" + index);
        return (
          <TableCell
            key={index.toString(10) + this.props.row}
            value={index.toString(10) + this.props.row}
          />
        );
      });
    return <tr>{columns()}</tr>;
  }
}
export default TableRow;
