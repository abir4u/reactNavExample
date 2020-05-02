import React from "react";
import { NavigateTo } from "../History";
import "../App.css";

export const LOCAL_URL = "http://localhohst:3000";
export const PROD_URL = "";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  navStyle1() {
    window.location.href += "page1";
  }
  navStyle2() {
    NavigateTo("/page2");
  }
  render() {
    return (
      <div className=".App">
        <input
          type="button"
          value="Navigate to Page 1"
          onClick={e => this.navStyle1()}
        />
        <input
          type="button"
          value="Navigate to Page 2"
          onClick={e => this.navStyle2()}
        />
      </div>
    );
  }
}
