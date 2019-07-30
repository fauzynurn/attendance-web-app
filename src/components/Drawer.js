import React, { Component } from "react";
import logo from "../assets/polban.png";
import { Layout, Icon, Menu } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;

export default class Drawer extends Component {
  state = {
    collapsed: false
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div style={{ alignContent: "center" }} className="logo">
          <img style={{ margin: 15, width: 40, height: 40 }} src={logo} />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/mhs">
              <Icon type="idcard" />
              <span>Daftar Mahasiswa</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/dsn">
              <Icon type="user" />
              <span>Daftar dosen</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/kdmhs">
              <Icon type="book" />
              <span>Kehadiran Mahasiswa</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/jdwl">
              <Icon type="calendar" />
              <span>Jadwal Mahasiswa</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/ruangan">
              <Icon type="audit" />
              <span>Ruangan</span>
            </Link>
          </Menu.Item> 
        </Menu>
      </Sider>
    );
  }
}
