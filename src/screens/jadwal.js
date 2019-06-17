import React, { Component } from "react";
import { Card, Col, Button, Divider,Cascader, Table } from 'antd';


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

  const columns = [
    {
      title: 'sesi',
      dataIndex: 'sesi',
    },
    {
      title: 'kode matkul',
      dataIndex: 'kode matkul',
    },
    {
      title: 'jenis matkul',
      dataIndex: 'jenis matkul',
    },
    {
      title: 'kode dosen',
      dataIndex: 'kode dosen',
    },
    {
      title: 'kode ruangan',
      dataIndex: 'kode ruangan',
    },
  ];

  

  const jadwalSenin = [
    {
      key: '1',
      sesi: '1',
      kodeMatkul: '9817239',
      jenisMatkul: 'teori',
      kodeDosen: 'AD3189273',
      kodeRuangan: '302' ,
    },
    {
      key: '2',
      sesi: '2',
      kodeMatkul: '9817239',
      jenisMatkul: 'teori',
      kodeDosen: 'AD3189273',
      kodeRuangan: '302' ,
    },
    {
      key: '3',
      sesi: '3',
      kodeMatkul: '9817239',
      jenisMatkul: 'teori',
      kodeDosen: 'AD3189273',
      kodeRuangan: '302' ,
    },
  ];
  

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  

export default class jadwal extends Component {
  onClick = () => {
    console.log(this)
    this.props.history.push('/editjdwl')
  }
render(){
    return<div>
    <Cascader options={options} onChange={onChange} placeholder="Please select a class" />
    <Divider type="vertical"/>
    <Button type="primary" shape="round" icon="plus" onClick={this.onClick}>
      tambah
    </Button>     
    <Divider/>
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="senin" bordered={false} style={{ width: 900 }}>
      <Table columns={columns}   pagination={false} />
    </Card>
    <Card title="selasa" bordered={false} style={{ width: 900 }}>
      <Table columns={columns}   pagination={false} />
    </Card>
    <Card title="rabu" bordered={false} style={{ width: 900 }}>
      <Table columns={columns}   pagination={false} />
    </Card>
    <Card title="kamis" bordered={false} style={{ width: 900 }}>
      <Table columns={columns}   pagination={false} />
    </Card>
    <Card title="jum'at" bordered={false} style={{ width: 900 }}>
      <Table columns={columns}   pagination={false} />
    </Card>
    
  </div>,
   
    
  </div>
}
}