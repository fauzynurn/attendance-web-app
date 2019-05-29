import React, { Component } from "react";
import { Table, Divider, Button } from "antd";
import Axios from "axios";


const columns = [
  {
    title: "Kelas",
    dataIndex: "kelas"
  },
  {
    title: "kode beacon",
    dataIndex: "mac"
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 150,
    render: () => 
    <div>
      <a href="javascript:;">Edit</a>
      <Divider type="vertical"/>
      <a href="javascript:;">Delete</a>
    </div>
  },
];


export default class kelas extends Component {
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
      <Button type="primary" shape="round" icon="plus">
          tambah
      </Button>
      <Divider/>
      <Table style={{height:200}} columns={columns}  pagination={false} />
      </div>
    );
  }
}
