import React, { Component } from "react";
import { Checkbox,Table, Tabs, DatePicker, Divider, Cascader } from 'antd';

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

function onChange(date, dateString) {
  console.log(date, dateString);
}

function callback(key) {
  console.log(key);
}

export default class kehadiranMhs extends Component {
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
  state ={
    data : [{
      key: 1,
      NIM: '1615110${i}',
      nama: 'budi pelo' ,
      status: false
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
        title: 'hadir',
        dataIndex: 'status',
        render: status => (
          <Checkbox checked={status == "hadir" ? true : false} onChange={(e) => this.onHadirChanged(e,status)}/>
        )
      },
      {
        title: 'sakit',
        dataIndex: 'status',
        render: status => (
          <Checkbox checked={status == "sakit" ? true : false} onChange={(e) => this.onSakitChanged(e,status)}/>
        )
      },
      {
        title: 'izin',
        dataIndex: 'status',
        render: status => (
          <Checkbox checked={status == "izin" ? true : false} onChange={(e) => this.onIzinChanged(e, status)}/>
        )
      },
      {
        title: 'alpa',
        dataIndex: 'status',
        render: status => (
          <Checkbox checked={status == "alpa" ? true : false} onChange={(e) => this.onAlpaChanged(e, status)}/>
        )
      },
    ]
  }

  render(){
    return <div>
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Harian" key="1">
        <Cascader options={options} onChange={onChange} placeholder="Please select a class" />
        <Divider type="vertical"/>
        <DatePicker onChange={onChange} />
        <Divider/>
        <Table columns={this.state.column}  dataSource={this.state.data}  pagination={false} />;
      </TabPane>
      <TabPane tab="Bulan" key="2">
        <Cascader options={options} onChange={onChange} placeholder="Please select a class" />
        <Divider type="vertical"/>
        <MonthPicker onChange={onChange} placeholder="Select month" />
        <Divider/>
        <Table columns={this.state.columns} pagination={false}/>;
      </TabPane>
      <TabPane tab="Semester" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
    </div>
  } 
}
  