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

export default class tambahkelas extends Component {
  

  render() {
    return (
      <div>         
      <Divider/>
      <Form {...formItemLayout}>
        <Form.Item label="kode kelas">
          <Input placeholder="kode kelas" id="kode" />
        </Form.Item>
        <Form.Item label="kode beacon">
          <Input placeholder="kode beacon" id="beacon" />
        </Form.Item>
      </Form>
      <Button type="primary" shape="round" icon="plus">
          simpan
      </Button>
    </div>

    );
  }
}