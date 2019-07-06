import React, { Component } from "react";
import { Table, Divider, Button } from "antd";
import Axios from "axios";
import {URL} from '../components/API';




export default class ruangan extends Component {
    onClick = () => {
      console.log(this)
      this.props.history.push('/tmbhkls')
    }

  state = {
    column: [
      {
        title: "kode ruangan",
        dataIndex: "kdRuangan"
      },
      {
        title: "nama ruangan",
        dataIndex: "namaRuangan"
      },
      {
        title: "kode beacon",
        dataIndex: "macAdress"
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
  };

  componentDidMount() {
    Axios.get(URL + "/getdaftarruangan")
      .then(response => {
        console.log(response);
        var newArray = [];
        response.data.forEach(item => {
          item.key = item.kdRuangan;
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
      <Table style={{height:200}} columns={this.state.column}  dataSource={this.state.data}  pagination={false} />
      </div>
    );
  }
}
