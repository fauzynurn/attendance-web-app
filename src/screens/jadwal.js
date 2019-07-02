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
      value: '3B',
      label: '3B',
    },
  ];




export default class jadwal extends Component {

  state = {
    column : [
      {
        title: 'sesi',
        dataIndex: 'jamKe',
      },
      {
        title: 'kode matkul',
        dataIndex: 'kodeMatkul',
      },
      {
        title: 'jenis matkul',
        dataIndex: 'jenis matkul',
      },
      {
        title: 'nama dosen',
        dataIndex: 'namaDosen',
      },
      {
        title: 'kode ruangan',
        dataIndex: 'kode ruangan',
      },
    ]
  }

  onClick = () => {
    console.log(this)
    this.props.history.push('/editjdwl')
  }

  onClickSearch = () => {
    const axios = require("axios");
    axios
      .post("http://10.10.67.219:8080/getdaftarjadwal", {
        kdKelas: this.state.kelas
      })
      .then(response => {
        console.log(response);
        var newArray = [];
        response.data.forEach(item => {
          item.key = item.kdMatkul;
          newArray.push(item);
        });
        this.setState({
          ...this.state,
          data: newArray
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

render(){
    return<div>
    <Cascader options={options} placeholder="Please select a class" />
    <Divider type="vertical"/>
    <Button type="primary" shape="circle" icon="search" onClick={this.onClickSearch}/>
    <Divider type="vertical"/>     
        
    <Button type="primary" shape="round" icon="edit" onClick={this.onClick}>
      edit
    </Button>     
    <Divider/>
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="senin" bordered={false} style={{ width: 900 }}>
      <Table columns={this.state.column}   pagination={false} />
    </Card>
    <Card title="selasa" bordered={false} style={{ width: 900 }}>
      <Table columns={this.state.column} dataSource={this.state.data}  pagination={false} />
    </Card>
    <Card title="rabu" bordered={false} style={{ width: 900 }}>
      <Table columns={this.state.column}   pagination={false} />
    </Card>
    <Card title="kamis" bordered={false} style={{ width: 900 }}>
      <Table columns={this.state.column}   pagination={false} />
    </Card>
    <Card title="jum'at" bordered={false} style={{ width: 900 }}>
      <Table columns={this.state.column}   pagination={false} />
    </Card>
    
  </div>,
   
    
  </div>
}
}