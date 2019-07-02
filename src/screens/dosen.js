import React, { Component } from "react";
import { Table, Divider, Button } from "antd";
import Axios from "axios";


const columns = [
  {
    title: "kode dosen",
    dataIndex: "kode"
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

const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    kode: '1615110',
    nama: 'budi sudarsono' 
  });
}

export default class dosen extends Component {
  onClick = () => {
    console.log(this)
    this.props.history.push('/tmbhdsn')
  }
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
        <Button type="primary" shape="round" icon="plus" onClick={this.onClick}>
            tambah
        </Button>
        <Divider/>
        <Table columns={columns} dataSource={data} width={100} pagination={false} />
      </div>
    );
  }
}
