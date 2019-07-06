import React, { Component } from "react";
import { message, Radio } from "antd";
import {URL} from '../components/API';

export default class Test extends Component {
  state = {
    nim: "",
    status: "",
    sesi: "",
    tanggal: ""
  };

  
  onChange = e => {
    const axios = require("axios");
    console.log("mmm",this.state)
    axios.put(URL + "/ubahkehadiran", {
        tgl: this.state.tanggal,
        jamKe: this.state.sesi[0],
        nim: this.state.nim,
        statusKehadiran: e.target.value
      }).then((response) => {
        this.setState({
          status: e.target.value
        },() => {console.log("CALLBACK",this.state); message.info("Proses update berhasil!")});
      }).catch(function(error) {
        console.log(error);
      });
  };

  static getDerivedStateFromProps = (props, state) => {
    console.log("PROPS",props)
    console.log("STATE",state)
    if(props.tanggal !== state.tanggal || props.sesi !== state.sesi){
      console.log("1")
      return {
        nim: props.nim,
        sesi: props.sesi,
        status : props.status,
        tanggal: props.tanggal
      };
    }else{
      console.log("2")
      return null
    }
}

  render() {
    return (
      <React.Fragment>
        <Radio.Group onChange={this.onChange} value={this.state.status}>
          <Radio value={"Hadir"}>Hadir</Radio>
          <Radio value={"Sakit"}>Sakit</Radio>
          <Radio value={"Izin"}>Izin</Radio>
          <Radio value={"Alpa"}>Alpa</Radio>
        </Radio.Group>
      </React.Fragment>
    );
  }
}
