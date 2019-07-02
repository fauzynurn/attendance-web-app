import React, { Component } from "react";
import { message, Radio } from "antd";

export default class Test extends Component {
  state = {
    nim: "",
    status: "",
    sesi: "",
    tanggal: ""
  };

  onChange = e => {
    const axios = require("axios");
    axios
      .put("http://10.10.67.219:8080/ubahkehadiran", {
        tgl: this.state.tanggal,
        jamKe: this.state.sesi,
        nim: this.state.nim,
        statusKehadiran: e.target.value
      })
      .then(function(response) {
        message.info("Proses update berhasil!");
        this.setState({
          ...this.state,
          status: e.target.value
        });
        console.log("RESPONSE", response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  static getDerivedStateFromProps = (props, state) => {
    return {
      nim: props.nim,
      sesi: props.sesi,
      status: props.status,
      tanggal: props.tanggal
    };
  };

  render() {
    console.log("TEST RENDER", this.state);
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
