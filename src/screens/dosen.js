import React, { Component } from "react";
import { Table, Divider, Button, Col, Popconfirm,message } from "antd";
import Axios from "axios";
import CSVReader from 'react-csv-reader';
import {URL} from '../components/API';


const handleForce = data => {
  const axios = require("axios");
  console.log(data)
  const list = data.map(item => {
    return {
     kdDosen : item[0],
     namaDosen : item[1]}
    }
  )
  list.shift()
  list.pop()
  console.log("LIST",list)
  axios.post(URL + "/importdosen", {
    listDosen : list
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


export default class dosen extends Component {

  state = {
    data : []
  };
  column = [
     {
       title: "kode",
       dataIndex: "kdDosen"
     },
     {
       title: "Nama",
       dataIndex: "namaDosen"
     },
     {
       title: "S/N",
       dataIndex: "imeiDosen"
     },
     {
       title: 'Action',
       key: 'operation',
       fixed: 'right',
       width: 150,
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
    const axios = require("axios");
    axios
      .post(URL +  "/resetdosen", {
        kdDosen: this.state.data[index].kdDosen
      }).then(res => {
        message.info("SUCCESS!")
        this.componentDidMount()
      })
    }
  
  componentDidMount() {
    Axios.get(URL + "/getdaftardosen")
      .then(response => {
        console.log(response);
        console.log('try');
        var newArray = [];
        response.data.forEach(item => {
          item.key = item.kdDosen;
          newArray.push(item);
        });
        this.setState({
          ...this.state,
          data: newArray
        });
      })
      .catch(function(error) {
        console.log(error);
  })
}

  render() {
    return (
      <div>
        <Col span={4}>
          <CSVReader
          onFileLoaded={handleForce}
          onError={handleDarkSideForce}
          inputId="ObiWan"
          inputStyle={{color: 'blue'}}
          onChange={this.onChange}
          />
        </Col>
        <br></br>
        <Divider/>
        <Table columns={this.column} dataSource={this.state.data} pagination={{defaultPageSize: 20}} pagination={false} scroll={{ y: 600 }}/>
      </div>
    );
  }
}
