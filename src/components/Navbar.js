import React, { Component } from "react";
import { Layout } from "antd";

const { Header } = Layout;
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Header style={{ background: "#fff", padding: 0 }} />
      </div>
    );
  }
}
