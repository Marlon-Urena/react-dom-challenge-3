import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
 

  render() {
    const rows = () => this.props.rows.map((row, index) => {
      return <TableRow key={index} columns={this.props.columns} row={index}/>
    });

    return <table><tbody key={0}>{rows()}</tbody></table>;
  }
}
export default Table;
