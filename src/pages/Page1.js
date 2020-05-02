import React from "react";
import "../App.css";

export default class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className=".App">
        <label>You are on Page 1</label>
      </div>
    );
  }
}
