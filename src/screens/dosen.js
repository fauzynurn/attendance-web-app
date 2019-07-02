import React, { Component } from "react";
import { Table, Divider, Button } from "antd";
import Axios from "axios";


export default class dosen extends Component {
  state = {
   column: [
    {
      title: "kode dosen",
      dataIndex: "kdDosen"
    },
    {
      title: "Nama",
      dataIndex: "namaDosen"
    },
    {
      title: "Password",
      dataIndex: "passwordDosen"
    },
    {
      title: "S/N",
      dataIndex: "imei"
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
  ]
}

  onClick = () => {
    console.log(this)
    this.props.history.push('/tmbhdsn')
  }


  componentDidMount() {
    Axios.get("http://10.10.67.219:8080/getdaftardosen")
      .then(response => {
        console.log(response);
        var newArray = [];
        response.data.forEach(item => {
          item.key = item.kdDosen;
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
