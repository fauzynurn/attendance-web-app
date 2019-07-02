import React, { Component } from "react";
import { Checkbox,Table, Tabs, DatePicker, Divider, Cascader,Button } from 'antd';
import { stat } from "fs";
import Test from '../components/Test'


const { MonthPicker } = DatePicker;
const TabPane = Tabs.TabPane;




const options = [
  {
    value: '3A',
    label: '3A',
  },
  {
    value: '3B',
    label: '3B',
  },
];

const sesiOptions = [
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
];


function callback(key) {
  console.log(key);
}

export default class kehadiranMhs extends Component {
  onTglChanged = (date, dateString) =>{
    this.setState({
      ...this.state,
      tgl: dateString
    },() => console.log("TANGGAL : ",this.state.tgl))
  }

  onSesiChanged = (value) => {
    this.setState({
      ...this.state,
      jamKe: value[0]
    },() => console.log("SESI : ",this.state.jamKe))
  }

  onKelasChanged = (value) => {
    this.setState({
      ...this.state,
      kelas: value[0]
    },() => console.log("kelas : ",this.state.kelas))
  } 

  onClick = ()=>{
    let x = {
      tanggal: this.state.tgl,
      // kdkelas: this.state.kelas,
      sesi: this.state.jamKe.toString(),
      status : this.state.kelas
    }

    console.log("ONCLICK",x)
    const axios = require('axios');
    axios.post('http://192.168.43.214:8080/getabsensiharian', {
      tgl: this.state.tgl,
      jamKe: this.state.jamKe.toString(),
      kdKelas: this.state.kelas
    })
    .then((response) => {
      console.log(response);
      var newArray = []
      response.data.forEach((item) => {
        item.key = item.nim
        newArray.push(item)
      })
      this.setState({
        ...this.state,
        data : newArray
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  state ={
    tgl: "",
    jamKe: 0,
    kelas: "",
    data : [],
    column : [
      {
        title: 'NIM',
        dataIndex: 'nim',
      },
      {
        title: 'nama mahasiswa',
        dataIndex: 'namaMhs',
      },
      {
        title:'kehadiran',
        dataIndex: 'statusKehadiran',
        render: (x,y,index) => (
          <Test tanggal={this.state.tgl}
                sesi={this.state.jamKe}
                nim={this.state.data[index].nim}
                status={this.state.data[index].statusKehadiran}/>
        )
      }
    ]
  }

  render(){
    return <div>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Harian" key="1">
        <Cascader onChange={this.onKelasChanged} options={options} placeholder="Pilih kelas" />
        <Divider type="vertical"/>
        <DatePicker onChange={this.onTglChanged} format={'DD-MM-YYYY'}/>
        <Divider type="vertical"/>
        <Cascader onChange={this.onSesiChanged} options={sesiOptions} placeholder="Pilih sesi" />
        <Divider type="vertical"/>
        <Button type="primary" shape="round" icon="search" onClick={this.onClick}>
          cari
      </Button>
      <Divider />
        <Table columns={this.state.column}  dataSource={this.state.data}  pagination={false} indentSize={60} />
      </TabPane>
    </Tabs>
    </div>
  } 
}
  