import React, {Component} from 'react';
import { Form, Input, Button, Cascader, Divider } from 'antd';
import {options, sesi, jenisMatkul, hari} from '../components/dataSet';

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




export default class editjadwal extends Component {
  

  render() {
    return (
      <div>      
      <Cascader options={options}  placeholder="pilih kelas" />
      <Divider type="verical"/> 
      <Cascader options={hari} placeholder="pilih hari" />   
      <Divider/>
      <Form {...formItemLayout}>
        <Form.Item label="sesi">
        <Cascader options={sesi} placeholder="pilih sesi" />
        </Form.Item>
        <Form.Item label="kode matkul">
          <Input placeholder="kode matkul" id="kode matkul" />
        </Form.Item>
        <Form.Item label="jenis matkul">
          <Cascader options={jenisMatkul} placeholder="teori/praktek" />   
        </Form.Item>
        <Form.Item label="kode dosen">
          <Input placeholder="kode dosen" id=" kode dosen" />
        </Form.Item>
        <Form.Item label="kode ruangan">
          <Input placeholder="kode ruangan" id=" kode ruangan" />
        </Form.Item>
        
      </Form>
      <Button type="primary" shape="round" icon="plus">
          simpan
      </Button>
    </div>

    );
  }
}