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


const kelas = [
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

const hari = [
  {
    value: 'senin',
    label: 'senin',
  },
  {
    value: 'selasa',
    label: 'selasa',
  },
  {
    value: 'rabu',
    label: 'rabu',
  },
  {
    value: 'kamis',
    label: 'kamis',
  },
  {
    value: 'jumat',
    label: 'jumat',
  },
];

const sesi = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '6',
    label: '6',
  },
  {
    value: '7',
    label: '7',
  },
  {
    value: '8',
    label: '8',
  },
  {
    value: '9',
    label: '9',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '11',
    label: '11',
  },
  {
    value: '12',
    label: '12',
  },
];

const jenis = [
  {
    value: 'teori',
    label: 'teori',
  },
  {
    value: 'praktek',
    label: 'praktek',
  },
];

export default class editjadwal extends Component {
  

  render() {
    return (
      <div>      
      <Cascader options={kelas}  placeholder="pilih kelas" />
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
          <Cascader options={jenis} placeholder="teori/praktek" />   
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