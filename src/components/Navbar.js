import React, { Component } from "react";
import { Layout, Button, Icon, Dropdown, Menu, Divider } from "antd";

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      logout
      <Divider type="vertical"/>
      <Icon type="logout" />
    </Menu.Item>
    </Menu>
    );

const { Header } = Layout;
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Header style={{ background: "#fff", paddingLeft : 1020 }}/>
      </div>
    );
  }
}
