import React, { Component } from "react";
import { Table, Divider, Button, Dropdown, Popconfirm, Menu } from "antd";
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

export default class ruangan extends Component {
    onClick = () => {
      console.log(this)
      this.props.history.push('/tmbhruangan')
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
