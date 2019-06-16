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

export default class tambahMhs extends Component {
  

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
          <Input placeholder="emay" id="emay" />
        </Form.Item>
      </Form>
      <Button type="primary" shape="round" icon="plus">
          simpan
      </Button>
    </div>

    );
  }
}