import React, { Component } from "react";
import { Table, Divider, Button, Cascader, Menu, Dropdown, Popconfirm } from "antd";
import Axios from "axios";
import Password from "antd/lib/input/Password";
import {URL} from '../components/API';
import {options} from '../components/dataSet';


const edit = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        edit
      </a>
    </Menu.Item>
  </Menu>
);


function onChange(date, dateString) {
  console.log(date, dateString);
}

export default class Mahasiswa extends Component {
  onKelasChanged = value => {
    this.setState(
      {
        ...this.state,
        kelas: value[0]
      },
      () => console.log("kelas : ", this.state.kelas)
    );
  };

  state = {
    column: [
      {
        title: "NIM",
        dataIndex: "nim"
      },
      {
        title: "Nama",
        dataIndex: "nama"
      },
      {
        title: "S/N",
        dataIndex: "imei"
      },
      {
        title: "Action",
        key: "operation",
        fixed: "right",
        width: 150,
        render: () => (
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
        )
      }
    ]
  };

  onClickSearch = () => {
    const axios = require("axios");
    axios
      .post(URL +  "/getdaftarmhs", {
        kdKelas: this.state.kelas
      })
      .then(response => {
        console.log(response);
        var newArray = [];
        response.data.forEach(item => {
          item.key = item.nim;
          newArray.push(item);
        });
        this.setState({
          ...this.state,
          data: newArray
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  onClick = () => {
    console.log(this);
    this.props.history.push("/tmbhmhs");
  };
  render() {
    return (
      <div>
        <Button type="primary" shape="round" icon="plus" onClick={this.onClick}>
          tambah
        </Button>

        <Divider type="vertical" />
        <Cascader
          options={options}
          onChange={this.onKelasChanged}
          placeholder="Pilih kelas"
        />
        <Divider type="vertical" />
        <Button
          type="primary"
          shape="round"
          icon="search"
          onClick={this.onClickSearch}
        />
        <Divider />
        <Table
          style={{ height: 200 }}
          columns={this.state.column}
          dataSource={this.state.data}
          pagination={false}
        />
      </div>
    );
  }
}
