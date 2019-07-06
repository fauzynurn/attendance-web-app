import React, { Component } from "react";
import { Table, Divider, Button } from "antd";
import Axios from "axios";
import {URL} from '../components/API';


export default class dosen extends Component {
  state = {
   column: [
    {
      title: "kode",
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
    Axios.get(URL + "/getdaftardosen")
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
