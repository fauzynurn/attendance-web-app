import React, { Component } from "react";
import { Table, Tabs, DatePicker, Divider } from 'antd';

const { MonthPicker } = DatePicker
const TabPane = Tabs.TabPane;
const columns = [
  {
    title: 'NIM',
    dataIndex: 'NIM',
  },
  {
    title: 'nama mahasiswa',
    dataIndex: 'nama',
  },
  {
    title: 'hadir',
    dataIndex: 'hadir',
  },
  {
    title: 'sakit',
    dataIndex: 'sakit',
  },
  {
    title: 'izin',
    dataIndex: 'izin',
  },
  {
    title: 'alpa',
    dataIndex: 'alpa',
  },
];

function onChange(date, dateString) {
  console.log(date, dateString);
}

function callback(key) {
  console.log(key);
}

export default class kehadiranMhs extends Component {

  render(){
    return <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Harian" key="1">
      <DatePicker onChange={onChange} />
      <Divider/>
      <Table columns={columns} />;
    </TabPane>
    <TabPane tab="Bulan" key="2">
      <MonthPicker onChange={onChange} placeholder="Select month" />
      <Divider/>
      <Table columns={columns} />;
    </TabPane>
    <TabPane tab="Semester" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
  
  }
  

  }
  