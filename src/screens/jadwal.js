import React, { Component } from "react";
import { Card, Col, Row, Divider,Cascader } from 'antd';

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
  

export default class jadwal extends Component {
render(){
    return<div>
    <Cascader options={options} onChange={onChange} placeholder="Please select a class" />    
    <Divider/>
    <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Senin" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Selasa" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Rabu" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
    <Divider/>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Kamis" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col style span={8}>
        <Card title="Jum'at" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
  </div>
}
}