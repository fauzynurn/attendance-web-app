import React, { Component } from "react";
import { Table, Divider,message, Col,Button, Modal, Input } from "antd";
import Axios from "axios";
import CSVReader from 'react-csv-reader';
import {URL} from '../components/API';

const dataSource = [
  {
    key: '1',
    kdRuangan: 'Mike',
    namaRuangan: '32',
    macAddress: '10 Downing Street',
  },
  {
    key: '2',
    kdRuangan: 'Mike',
    namaRuangan: '32',
    macAddress: '10 Downing Street',
  },
  
];

const handleForce = data => {
  const axios = require("axios");
  console.log(data)
  const list = data.map(item => {
    return {
     kdRuangan : item[0]
    }
  }
  )
  list.shift()
  list.pop()
  console.log("LIST",list)
  axios.post(URL + "/importruangan", {
    listRuangan : list
    }).then(response => {
      console.log(response); message.info("Proses import berhasil!")

    })
    .catch(function(error) {
      console.log(error); message.error("Proses import gagal!")
    });
};

const handleDarkSideForce = error => {
  console.log(error)
}

export default class ruangan extends Component {
  status = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  

  handleSave = (index) => {
    console.log(index);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  state = {
    data : []
  };
  column = [
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
        render: (x,y,index) => (
        <div>
          <Button type="primary" onClick={this.showModal}>
            edit
          </Button>
          <Modal
          title="edit kode beacon"
          visible={this.state.visible}
          onSave={this.handleSave}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              cancel
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleSave}>
              save
            </Button>,
          ]}
        >
         <Input placeholder="kode beacon" allowClear/>
        </Modal>
        </div>
        )
      },
    ]

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
        <Col span={4}>
          <CSVReader
          onFileLoaded={handleForce}
          onError={handleDarkSideForce}
          inputId="ObiWan"
          inputStyle={{color: 'blue'}}
          onChange={this.onChange}
          />
        </Col>
        <Divider/>
        <Table style={{height:200}} columns={this.column}  dataSource={this.state.dataSource}  pagination={true} />
      </div>
    );
  }
}
