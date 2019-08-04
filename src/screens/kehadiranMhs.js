import React, { Component } from "react";
import {Table, Tabs, DatePicker, Divider, Cascader, Button} from "antd";
import Test from "../components/Test";
import {URL} from '../components/API';
import {options, sesi} from '../components/dataSet';
import Axios from "axios";

const { MonthPicker } = DatePicker;
const TabPane = Tabs.TabPane;
const Column = Table;


function callback(key) {
  console.log(key);
}

export default class kehadiranMhs extends Component {
  state = {
    tgl: "",
    jamKe: 0,
    kelas: "",
    kelasSemester: "",
    dataHarian: [],
    dataSemester: []
  };

  // semester = {
  //   data: [],
  // }

   Columns = [
    {
      title: "nim",
      dataIndex: "nim"
    },
    {
      title: "Nama",
      dataIndex: "namaMhs"
    },
  ];

  constructor(props){
    super(props)
    this.tgl = ""
    this.kelas = ""
    this.jamKe = ""
  }

  onClickSearch = () => {
    const axios = require("axios");
    console.log("THIS",this.state.kelasSemester)
    axios
      .post(URL +  "/getrekapkelas", {
        kdKelas: this.state.kelasSemester
      })
      .then(response => {
        console.log("RES",response);
        var newArray = [];
        response.data.forEach(item => {
          item.key = item.nim;
          newArray.push(item);
        });
        this.setState({
          ...this.state,
          dataSemester: newArray
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  onRequestKelas = value => {
    this.setState(
      {
        ...this.state,
        kelasSemester: value[0]  
      },
      //console.log("kelas :",this.semester.kelas)
      () => console.log("kelas : ", this.state.kelas)
    );
  };

  doRequest = (value) => {
    const axios = require("axios");
    axios
      .post(URL + "/getabsensiharian", {
        tgl: this.tgl,
        jamKe: this.jamKe[0],
        kdKelas: this.kelas[0]
      })
      .then(response => {
        console.log(response);
        var newArray = [];
        response.data.forEach(item => {
          item.key = item.nim;
          newArray.push(item);
        });
        if(value === 1){
          this.setState({
            ...this.state,
            data: newArray,
            tgl : this.tgl
          });
        }else if(value === 2){
          this.setState({
            ...this.state,
            data: newArray,
            jamKe : this.jamKe
          });
        }else{
          this.setState({
            ...this.state,
            kelas: this.kelas
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount(){
    this.doRequest()
  }

  onTglChanged = (date, dateString) => {
    this.tgl = dateString
    this.doRequest(1)
  };

  onSesiChanged = value => {
    this.jamKe = value
    this.doRequest(2)
  };

  onKelasChanged = value => {
    this.kelas = value
    this.doRequest(3)
  };

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Harian" key="1">
            <Cascader
              onChange={this.onKelasChanged}
              options={options}
              placeholder="Pilih kelas"
            />
            <Divider type="vertical" />
            <DatePicker onChange={this.onTglChanged} format={"DD-MM-YYYY"} />
            <Divider type="vertical" />
            <Cascader
              onChange={this.onSesiChanged}
              options={sesi}
              placeholder="Pilih sesi"
            />
            <Divider type="vertical" />
            <Divider />
            <Table
              dataSource={this.state.data}
              pagination={false}
              indentSize={60}
            >
              <Column title="NIM" dataIndex="nim" />
              <Column title="Nama" dataIndex="namaMhs" />
              <Column
                title="Status"
                dataIndex="statusKehadiran"
                render={(x, record) => (
                  <Test
                    tanggal={this.state.tgl}
                    sesi={this.state.jamKe}
                    nim={record.nim}
                    status={record.statusKehadiran}
                  />
                )}
              />
            </Table>
          </TabPane>
          <TabPane tab="semester" key="2">
          <Cascader
            options={options}
            onChange={this.onRequestKelas}
            placeholder="Pilih kelas"
          />
          <Divider type="vertical" />
          <Button
            type="primary"
            shape="round"
            icon="search"
            onClick={this.onClickSearch}
          />
          <Divider/>
            <Table dataSource={this.state.dataSemester} pagination={false} >
              <Column title="NIM" dataIndex="nim" style={{width:200}} />
              <Column title="Nama" dataIndex="nama" style={{width:200}} />
              <Column title="sakit" dataIndex="sakit" style={{width:50}} />
              <Column title="izin" dataIndex="izin" style={{width:50}} />
              <Column title="alpa" dataIndex="alpa" style={{width:50}} />
            </Table>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
