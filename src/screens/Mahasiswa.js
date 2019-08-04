import React, { Component } from "react";
import {Col, Table, Divider, Button, Cascader, message  } from "antd";
import {URL} from '../components/API';
import {options} from '../components/dataSet';
import CSVReader from 'react-csv-reader';


const handleForce = data => {
  const axios = require("axios");
  console.log(data)
  const list = data.map(item => {
    return {
     nim : item[0],
     namaMhs : item[1],
     kdKelas : item[2],
    }
  }
  )
  list.shift()
  list.pop()
  console.log("LIST",list)
  axios.post(URL + "/importmhs", {
    listMhs : list
    }).then(response => {
      console.log(response); message.info("Proses import berhasil!")

    })
    .catch(function(error) {
      console.log(error); message.error("Proses import gagal!")
    });
};

const handleDarkSideForce = error => {
  console.log(error)
}

export default class Mahasiswa extends Component {

  state = {
    data : []
  };
  column = [
    {
      title: "NIM",
      dataIndex: "nim"
    },
    {
      title: "Nama",
      dataIndex: "nama"
    },
    {
      title: "S/N",
      dataIndex: "imei"
    },
    {
      title: "Action",
      dataIndex: "action",
      fixed: "right",
      width : 100,
      render: (x,y,index) => (
        <div>
            <Button
              type="primary"
              shape="circle"
              icon="edit"
              size="small"
              onClick={() => this.onClickReset(index)}
            />
        </div>
      )
    }
  ]
  onClickReset = (index) => {
    // console.log(this.state.data[index].nama)
    const axios = require("axios");
    axios
      .post(URL +  "/resetmhs", {
        nim: this.state.data[index].nim
      }).then(res => {
        message.info("SUCCESS!")
        this.onClickSearch()
      })
    }

  onKelasChanged = value => {
    this.setState(
      {
        ...this.state,
        kelas: value[0]
      },
      () => console.log("kelas : ", this.state.kelas)
    );
  };

  onClickSearch = () => {
    const axios = require("axios");
    axios
      .post(URL +  "/getdaftarmhs", {
        kdKelas: this.state.kelas
      })
      .then(response => {
        console.log(response);
        var newArray = [];
        response.data.forEach(item => {
          item.key = item.nim;
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

  render() {
    return (
      <div>
          <Cascader
            options={options}
            onChange={this.onKelasChanged}
            placeholder="Pilih kelas"
          />
          <Divider type="vertical" />
          <Button
            type="primary"
            shape="round"
            icon="search"
            onClick={this.onClickSearch}
          />
          <div style={{marginTop:10}}>
          <CSVReader 
            onFileLoaded={handleForce}
            onError={handleDarkSideForce}
            inputId="ObiWan"
            inputStyle={{color: 'blue'}}
            onChange={this.onChange}
          />
          </div>
        <Divider/> 
        <Table
          columns={this.column} dataSource={this.state.data} pagination={{defaultPageSize: 20}} pagination={false} scroll={{ y: 600 }}
        />
      </div>
    );
  }
}
