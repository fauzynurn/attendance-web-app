import React, { Component } from "react";
import { Table } from "antd";
import Axios from "axios";

const columns = [
  {
    title: "NIM",
    dataIndex: "nim"
  },
  {
    title: "Nama",
    dataIndex: "nama"
  },
  {
    title: "Password",
    dataIndex: "password"
  },
  {
    title: "S/N",
    dataIndex: "serialnumber"
  }
];
export default class Mahasiswa extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    Axios.get("http://192.168.100.8:8080/getAllCollege").then(res =>
      this.setState({ ...this.state, data: res.data })
    );
  }
  render() {
    return (
      <div>
        {this.state.data.length > 0 ? (
          <Table columns={columns} dataSource={this.state.data} />
        ) : (
          <p>Loading..</p>
        )}
      </div>
    );
  }
}
