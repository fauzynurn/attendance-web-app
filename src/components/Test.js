import React, { Component } from "react";
import {
  message, Cascader} from 'antd';

const keterangan = [
  {
    value: 'hadir',
    label: 'hadir',
  },
  {
    value: 'sakit',
    label: 'sakit',
  },
  {
    value: 'izin',
    label: 'izin',
  },
  {
    value: 'alpa',
    label: 'alpa',
  },
];

export default class Test extends Component {
    
    state = {
        nim:"",
        status:"",
        kelas: ""
    }
    

    componentWillMount(){
        this.setState({
            nim : this.props.nim,
            status : this.props.status,
            kelas : this.props.kelas
        })
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
      axios.post('http://192.168.43.214:8080/ubahkehadiran', {
        tanggal: this.props.tanggal,
        sesi: this.props.sesi,
        nim : this.state.nim,
        status : value[0]
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
    render(){
      return <Cascader 
        onChange={this.onCascaderChanged} 
        options={keterangan} 
        defaultValue={['hadir']}
        allowClear={false} 
        placeholder="pilih keterangan" />
    } 
  }