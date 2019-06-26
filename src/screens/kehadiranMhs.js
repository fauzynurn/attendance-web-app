import React, { Component } from "react";
import { Checkbox,Table, Tabs, DatePicker, Divider, Cascader,Button } from 'antd';
import { stat } from "fs";
import Test from '../components/Test'


const { MonthPicker } = DatePicker;
const TabPane = Tabs.TabPane;




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
      tanggal: dateString
    },() => console.log("TANGGAL : ",this.state.tanggal))
  }

  onSesiChanged = (value) => {
    this.setState({
      ...this.state,
      sesi: value[0]
    },() => console.log("SESI : ",this.state.sesi))
  }
  onHadirChanged = (e, status) => {
    if(e.target.checked){
      console.log("HADIR")
      const tes = [...this.state.data]
      tes[1].status = "hadir"
      this.setState({
        data : tes
      },() => console.log(tes[1].status))
    }
  };
  
  onSakitChanged = (e, status) => {
    console.log(e)
    if(e.target.checked){
      const tes = [...this.state.data]
      tes[1].status = "sakit"
      this.setState({
        data : tes
      })
    }
    
  };
  
  onIzinChanged = (e, status) => {
    console.log(e)
    if(e.target.checked){
      const tes = [...this.state.data]
      tes[1].status = "izin"
      this.setState({
        data : tes
      })
    }
  };
  
  onAlpaChanged = (e, status) => {
    if(e.target.checked){
      const tes = [...this.state.data]
      tes[1].status = "alpa"
      this.setState({
        data : tes
      })
    }
  };

  onKelasChanged = (value) => {
    this.setState({
      ...this.state,
      kelas: value[0]
    },() => console.log("kelas : ",this.state.kelas))
  } 

  onClick = ()=>{
    console.log("KELAS: ",this.state.kelas)
    console.log("TANGGAL: ",this.state.tanggal)
    console.log("SESI: ",this.state.sesi)
    // const axios = require('axios');
    // axios.post('http://192.168.43.214:8080/ubahkehadiran', {
    //   tanggal: this.state.tanggal,
    //   sesi: this.state.sesi,
    //   kelas: this.state.kelas
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  state ={
    tanggal: "",
    sesi: 0,
    kelas: "",
    data : [{
      key: 1,
      NIM: '16151101',
      kelas : '3B',
      nama: 'budi adrianto' ,
      status: false
    },
    {
      key: 2,
      NIM: '16151102',
      kelas : '3B',
      nama: 'budi pamungkas' ,
      status: "izin"
    },
    {
      key: 3,
      NIM: '16151103',
      kelas : '3B',
      nama: 'budi sudarsono' ,
      status: "alpa"
    }],
    column : [
      {
        title: 'NIM',
        dataIndex: 'NIM',
      },
      {
        title: 'nama mahasiswa',
        dataIndex: 'nama',
      },
      {
        title:'kehadiran',
        dataIndex: 'kehadiran',
        render: (_,mahasiswa) => (
          <Test tanggal={this.state.tanggal}
                sesi={this.state.sesi}
                nim={mahasiswa.NIM}
                kelas={mahasiswa.kelas}
                status={mahasiswa.status}/>
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
        <Table columns={this.state.column}  dataSource={this.state.data}  pagination={false} />
      </TabPane>
      <TabPane tab="Bulan" key="2">
        <Cascader options={options} placeholder="Please select a class" />
        <Divider type="vertical"/>
        <MonthPicker placeholder="Select month" />
        <Divider/>
        <Table columns={this.state.column}  dataSource={this.state.data}  pagination={false} />
      </TabPane>
      <TabPane tab="Semester" key="3">
        <Table columns={this.state.column}  dataSource={this.state.data}  pagination={false} />
      </TabPane>
    </Tabs>
    </div>
  } 
}
  