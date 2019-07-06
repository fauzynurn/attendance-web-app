import React, { Component } from "react";
import { Table, Divider, Button, Popconfirm } from "antd";
import Axios from "axios";
import {URL} from '../components/API';


export default class waliDosen extends Component {
  state = {
   column: [
    {
      title: "kelas",
      dataIndex: "kdKelas"
    },
    {
      title: "program studi",
      dataIndex: "prodi"
    },
    {
      title: "wali dosen",
      dataIndex: "dosenWali"
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
        <Popconfirm title="data akan dihapus？" okText="Ya" cancelText="Tidak">
        <a href="javascript:;">Hapus</a>
        </Popconfirm>
      </div>
    },
  ]
}

  onClick = () => {
    console.log(this)
    this.props.history.push('/tmbhdsn')
  }


  componentDidMount() {
    Axios.get(URL + "/getdaftarkelas")
      .then(response => {
        console.log(response);
        var newArray = [];
        response.data.forEach(item => {
          item.key = item.kdKelas;
          newArray.push(item);
        });
        this.setState({
          ...this.state,
          data: newArray
        });
      })
      .catch(function(error) {
        console.log(error);
  })
}

  render() {
    return (
      <div>
        <Button type="primary" shape="round" icon="plus" onClick={this.onClick}>
            tambah
        </Button>
        <Divider/>
        <Table columns={this.state.column} dataSource={this.state.data} width={100} pagination={false} />
      </div>
    );
  }
}
