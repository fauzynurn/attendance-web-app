import React, {Component} from 'react';
import { Form, Input, Button, Cascader, Divider, message } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 3 },
    sm: { span: 0 },
  },
  wrapperCol: {
    xs: { span: 5 },
    sm: { span: 10 },
  },
};


const options = [
  {
    value: '1A',
    label: '1A',
  },
  {
    value: '1B',
    label: '1B',
  },
  {
    value: '2A',
    label: '2A',
  },
];

function callback(key) {
  console.log(key);
}

export default class tambahMhs extends Component {
  onChange = e => {
    const axios = require("axios");
    axios
      .put("http://10.10.67.219:8080/ubahkehadiran", {
        tgl: this.state.tanggal,
        jamKe: this.state.sesi,
        nim: this.state.nim,
        statusKehadiran: e.target.value
      })
      .then(function(response) {
        message.info("Proses update berhasil!");
        this.setState({
          ...this.state,
          status: e.target.value
        });
        console.log("RESPONSE", response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };  

  render() {
    return (
      <div>      
      <Cascader options={options}  placeholder="Please select a class" />    
      <Divider/>
      <Form {...formItemLayout}>
        <Form.Item label="nama">
          <Input placeholder="nama" id="nama" />
        </Form.Item>
        <Form.Item label="NIM">
          <Input placeholder="NIM" id="NIM" />
        </Form.Item>
        <Form.Item label="serial number">
          <Input placeholder="serial number" id="s\n" />
        </Form.Item>
      </Form>
      <Button type="primary" shape="round" icon="plus">
          simpan
      </Button>
    </div>

    );
  }
}