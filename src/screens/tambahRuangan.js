import React, {Component} from 'react';
import { Form, Input, Button, Divider } from 'antd';

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

export default class tambahRuangan extends Component {
  

  render() {
    return (
      <div>         
      <Divider/>
      <Form {...formItemLayout}>
        <Form.Item label="kode ruangan">
          <Input placeholder="kode ruangan" id="kode" />
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