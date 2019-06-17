import React, {Component} from 'react';
import { Form, Input, Button, Cascader, Divider } from 'antd';

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

export default class editjadwal extends Component {
  

  render() {
    return (
      <div>      
      <Cascader options={options}  placeholder="pilih hari" />
      <Divider type="verical"/> 
      <Cascader options={options} placeholder="pilih sesi" />   
      <Divider/>
      <Form {...formItemLayout}>
        <Form.Item label="sesi">
        <Cascader options={options} placeholder="pilih sesi" />
        </Form.Item>
        <Form.Item label="kode matkul">
          <Input placeholder="kode matkul" id="kode matkul" />
        </Form.Item>
        <Form.Item label="jenis matkul">
          <Input placeholder="jenis matkul" id="jenis matkul" />
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