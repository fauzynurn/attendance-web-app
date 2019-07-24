import React, { Component } from "react";
import { Table, Divider, Button, Popconfirm, Dropdown, Menu } from "antd";
import Axios from "axios";
import {URL} from '../components/API';

const edit = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        edit
      </a>
    </Menu.Item>
  </Menu>
);

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
         <Dropdown overlay={edit} placement="topCenter">
              <Button type="primary" shape="circle" icon="edit" size="small" />
            </Dropdown>
            <Divider type="vertical" />
            <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
              <Button
                type="primary"
                shape="circle"
                icon="delete"
                size="small"
              />
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
