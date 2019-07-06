import React, { Component } from "react";
import {Table, Tabs, DatePicker, Divider, Cascader, Button} from "antd";
import Test from "../components/Test";
import {URL} from '../components/API';
import {options, sesi} from '../components/dataSet';

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
    data: []
  };

  constructor(props){
    super(props)
    this.tgl = ""
    this.kelas = ""
    this.jamKe = ""
  }

  doRequest = (value) => {
    console.log("AJAJA",this)
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
        </Tabs>
      </div>
    );
  }
}
