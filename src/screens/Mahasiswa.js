import React, { Component } from "react";
import { Table, Divider, Button, Cascader, Menu, Dropdown } from "antd";
import Axios from "axios";
import Password from "antd/lib/input/Password";

const edit = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        edit
      </a>
    </Menu.Item>
  </Menu>
);

const deleteHover = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        delete
      </a>
    </Menu.Item>
  </Menu>
);

// const columns = [
//   {
//     title: "NIM",
//     dataIndex: "nim"
//   },
//   {
//     title: "Nama",
//     dataIndex: "nama"
//   },
//   {
//     title: "Password",
//     dataIndex: "password"
//   },
//   {
//     title: "S/N",
//     dataIndex: "serialnumber"
//   },
//   {
//     title: 'Action',
//     key: 'operation',
//     fixed: 'right',
//     width: 150,
//     render: () =>
//     <div>
//       <Dropdown overlay={edit} placement="topCenter">
//       <Button type="primary" shape="circle" icon="edit" size="small" />
//       </Dropdown>
//       <Divider type="vertical"/>
//       <Dropdown overlay={deleteHover} placement="topCenter">
//       <Button type="primary" shape="circle" icon="delete" size="small" />
//       </Dropdown>
//     </div>
//   },
// ];

const options = [
  {
    value: "1A",
    label: "1A"
  },
  {
    value: "1B",
    label: "1B"
  },
  {
    value: "2A",
    label: "2A"
  },
  {
    value: "3A",
    label: "3A"
  },
  {
    value: "3B",
    label: "3B"
  }
];

function onChange(date, dateString) {
  console.log(date, dateString);
}

// const axios = require('axios');
//     axios.post('http://192.168.43.214:8080/getdaftarmhs', {
//       kdKelas: this.state.kelas
//     })
//     .then((response) => {
//       console.log(response);
//       var newArray = []
//       response.data.forEach((item) => {
//         item.key = item.nim
//         newArray.push(item)
//       })
//       this.setState({
//         ...this.state,
//         data : newArray
//       })
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

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
            <Dropdown overlay={deleteHover} placement="topCenter">
              <Button
                type="primary"
                shape="circle"
                icon="delete"
                size="small"
              />
            </Dropdown>
          </div>
        )
      }
    ]
  };

  onClickSearch = () => {
    const axios = require("axios");
    axios
      .post("http://192.168.43.214:8080/getdaftarmhs", {
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
          placeholder="Please select a class"
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
