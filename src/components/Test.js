import React, { Component } from "react";
import {message, Cascader} from 'antd';

const keterangan = [
  {
    value: 'Hadir',
    label: 'Hadir',
  },
  {
    value: 'Sakit',
    label: 'Sakit',
  },
  {
    value: 'Izin',
    label: 'Izin',
  },
  {
    value: 'Alpa',
    label: 'Alpa',
  },
];

export default class Test extends Component {
    
    state = {
        nim:"",
        status:"",
        kelas: ""
    }

    componentDidMount(){
        this.setState({
            nim : this.props.nim,
            sesi : this.props.sesi,
            status : this.props.status,
            kelas : this.props.kelas
        },() => console.log(this.state.status))
    }

    onCascaderChanged = (value) => {  
      let x = {
        tanggal: this.props.tanggal,
        // kdkelas: this.state.kelas,
        sesi: this.props.sesi,
        nim : this.state.nim,
        status : value[0]
      }

      console.log(x)
      const axios = require('axios');
      axios.put('http://192.168.43.214:8080/ubahkehadiran', {
        tgl: this.props.tanggal,
        jamKe: this.state.sesi,
        nim : this.state.nim,
        statusKehadiran : value[0]
      })
      .then(function (response) {
        console.log("RESPONSE",response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
    render(){
      return (
      <React.Fragment>
        <Cascader 
        onChange={this.onCascaderChanged} 
        options={keterangan} 
        defaultValue={[this.props.status]}
        allowClear={false} />
      </React.Fragment>
      )
    } 
  }