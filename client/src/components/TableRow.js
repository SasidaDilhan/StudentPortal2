import React, { Component } from "react";

export default class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.course}</td>
        <td>{this.props.obj.assignment_name}</td>
        <td>{this.props.obj.deadline}</td>
        <td>
          <button className="btn btn-primary">Do this</button>
        </td>
      </tr>
    );
  }
}
