import React, { Component } from "react";
import { Checkbox,Table, Tabs, DatePicker, Divider, Cascader } from 'antd';

const { MonthPicker } = DatePicker;
const TabPane = Tabs.TabPane;

onHadirChanged = (e, status) => {
  if(!e.target.checked){
    status = "hadir"
  }
  
};

onSakitChanged = (e, status) => {
  if(!e.target.checked){
    status = "sakit"
  }
  
};

onIzinChanged = (e, status) => {
  if(!e.target.checked){
    status = "izin"
  }
  
};

onAlpaChanged = (e, status) => {
  if(!e.target.checked){
    status = "alpa"
  }
  
};
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
    dataIndex: 'status',
    render: status => (
      <Checkbox checked={status == "hadir" ? true : false} onChange={(e) => onHadirChanged(e,status)}/>
    )
  },
  {
    title: 'sakit',
    dataIndex: 'status',
    render: status => (
      <Checkbox checked={status == "sakit" ? true : false} onChange={(e) => onSakitChanged(e,status)}/>
    )
  },
  {
    title: 'izin',
    dataIndex: 'status',
    render: status => (
      <Checkbox checked={status == "izin" ? true : false} onChange={(e) => onIzinChanged(e, status)}/>
    )
  },
  {
    title: 'alpa',
    dataIndex: 'status',
    render: status => (
      <Checkbox checked={status == "alpa" ? true : false} onChange={(e) => onAlpaChanged(e, status)}/>
    )
  },
];

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

const data = [];
  data.push({
    key: 1,
    NIM: '1615110${i}',
    nama: 'budi pelo' ,
    status: "hadir"
  },
  {
    key: 2,
    NIM: '1615110${i}',
    nama: 'budi pelo' ,
    status: "izin"
  },
  {
    key: 3,
    NIM: '1615110${i}',
    nama: 'budi pelo' ,
    status: "alpa"
  });

function onChange(date, dateString) {
  console.log(date, dateString);
}

function callback(key) {
  console.log(key);
}

export default class kehadiranMhs extends Component {

  render(){
    return <div>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Harian" key="1">
        <Cascader options={options} onChange={onChange} placeholder="Please select a class" />
        <Divider type="vertical"/>
        <DatePicker onChange={onChange} />
        <Divider/>
        <Table columns={columns}  dataSource={data}  pagination={false} />;
      </TabPane>
      <TabPane tab="Bulan" key="2">
        <Cascader options={options} onChange={onChange} placeholder="Please select a class" />
        <Divider type="vertical"/>
        <MonthPicker onChange={onChange} placeholder="Select month" />
        <Divider/>
        <Table columns={columns} pagination={false}/>;
      </TabPane>
      <TabPane tab="Semester" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
    </div>
  } 
}
  