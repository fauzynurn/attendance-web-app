import React, {Component} from 'react';
import { Form, Input, Button, Cascader, Divider, message } from 'antd';
import {URL} from '../components/API';
import {options} from '../components/dataSet';

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


function callback(key) {
  console.log(key);
}

export default class tambahMhs extends Component {
  state ={ 
    nim : '',
    namaMhs : '',
    kelas : '',
  }

  handleChange = event => {
    this.setState({ 
      
     });
  }



  onKelasChanged = value => {
    this.setState(
      {
        ...this.state,
        kelas: value[0]
      },
      () => console.log("kelas : ", this.state.kelas)
    );
  };


  onChange = e => {
    const axios = require("axios");
    axios.post(URL + "/tambahmhs", {
        nama: this.state.nama,
        nim: this.state.nim,
        kelas: this.state.serialNumber
      })
      .then(function(response) {
        message.info("Proses input berhasil!");
        this.setState({
          ...this.state,
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
      <Divider/>
      <Form {...formItemLayout}>
        <Form.Item label="nama">
          <Input placeholder="nama" id="nama" />
        </Form.Item>
        <Form.Item label="NIM">
          <Input placeholder="NIM" id="NIM" />
        </Form.Item>
        <Form.Item label="kelas">
          <Cascader
            options={options}
            onChange={this.onKelasChanged}
            placeholder="Pilih kelas"
          />  
        </Form.Item>
      </Form>
      <Button type="primary" shape="round" icon="plus" onChange={this.onChange}>
          simpan
      </Button>
    </div>

    );
  }
}