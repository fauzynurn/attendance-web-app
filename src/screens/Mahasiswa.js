import React, { Component } from "react";
import {Col, Table, Divider, Button, Cascader, Upload, message, Icon, Popconfirm } from "antd";
import {URL} from '../components/API';
import {options} from '../components/dataSet';



function onChange(date, dateString) {
  console.log(date, dateString);
}

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onUploadChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


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
        <Col span={20}>
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
          </Col>
        <Col span={4}>
        <Upload {...props}   >
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>  
        </Col>
        <br></br>
        <Divider/> 
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
