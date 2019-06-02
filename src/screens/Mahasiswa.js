import React, { Component } from "react";
import { Table, Divider, Button, Cascader } from "antd";
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
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
  });
}

const options = [
  {
    value: '1A',
    label: '1A',
  },
  {
    value: '1B',
    label: '1B',
  },
  {
    value: '2A',
    label: '2A',
  },
];

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default class Mahasiswa extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    Axios.get("http://192.168.100.8:8080/getAllCollege").then(res =>
      this.setState({ ...this.state, data: res.data })
    );
  }
  onClick = () => {
    console.log(this)
    this.props.history.push('/tmbhmhs')
  }
  render() {
    return (
      <div>
      <Button type="primary" shape="round" icon="plus" onClick={this.onClick}>
          tambah
      </Button>
      <Divider type="vertical"/>
      <Cascader options={options} onChange={onChange} placeholder="Please select a class" />
      <Divider/>
      <Table style={{height:200}} columns={columns} dataSource={data} pagination={false} />
      </div>
    );
  }
}
