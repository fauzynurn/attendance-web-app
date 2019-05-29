import React, { Component } from "react";
import { Layout } from "antd";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Mahasiswa from "./screens/Mahasiswa";
import kehadiranMhs from "./screens/kehadiranMhs";
import dosen from "./screens/dosen";
import jadwal from "./screens/jadwal";
import Home from "./screens/Home";
import kelas from "./screens/kelas";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import tambahMhs from "./screens/tambahMhs";
//const axios = require("axios");
const { Content } = Layout;

class App extends Component {
  // state = {
  //   collapsed: true
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFieldsAndScroll((err, values) => {
  //     if (!err) {
  //       console.log(values);
  //       axios
  //         .post(
  //           "http://10.10.67.33:8080/add",
  //           {
  //             nim: values.nim,
  //             nama: values.nama,
  //             password: values.pass,
  //             serialnumber: values.sn
  //           },
  //           {
  //             headers: {
  //               "Content-Type": "application/json"
  //             }
  //           }
  //         )
  //         .then(res => {
  //           res.data === 200
  //             ? message.success("Data added successfully.")
  //             : message.warning(`Message: ${res.data}`);
  //         })
  //         .catch(error =>
  //           message.error(`Error: ${error.response.data.message}`)
  //         );
  //     } else {
  //       message.info(err);
  //     }
  //   });
  // };

  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // };
  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh" }}>
          <Drawer />
          <Layout>
            <Navbar />
            <Content
              style={{
                height: "100vh",
                margin: "24px 16px",
                padding: 24,
                background: "#fff"
              }}
            >
              <Route exact path="/" component={Home} />
              <Route path="/mhs" component={Mahasiswa} />
              <Route path="/dsn" component={dosen} />
              <Route path="/kdmhs" component={kehadiranMhs} />
              <Route path="/jdwl" component={jadwal}/>
              <Route path="/kls" component={kelas}/>
              <Route path="/tmbhmhs" component={tambahMhs}/>
              

            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>

      // <Layout className="parent">
      //   <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
      //     <div style={{ alignContent: "center" }} className="logo">
      //       <img style={{ margin: 15, width: 40, height: 40 }} src={logo} />
      //     </div>
      //     <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      //       <Menu.Item key="1">
      //         <Icon type="user" />
      //         <span>nav 1</span>
      //       </Menu.Item>
      //       <Menu.Item key="2">
      //         <Icon type="video-camera" />
      //         <span>nav 2</span>
      //       </Menu.Item>
      //       <Menu.Item key="3">
      //         <Icon type="upload" />
      //         <span>nav 3</span>
      //       </Menu.Item>
      //     </Menu>
      //   </Sider>
      //   <Layout>
      //     <Header style={{ background: "#fff", padding: 0 }}>
      //       <Icon
      //         style={{ width: 90, height: 90 }}
      //         className="trigger"
      //         type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
      //         onClick={this.toggle}
      //       />
      //     </Header>
      //     <Content
      //       style={{
      //         height: "100vh",
      //         margin: "24px 16px",
      //         padding: 24,
      //         background: "#fff"
      //       }}
      //     >
      //       <Form onSubmit={this.handleSubmit}>
      //         <Form.Item label="NIM">
      //           {getFieldDecorator("nim")(<Input />)}
      //         </Form.Item>
      //         <Form.Item label="Nama">
      //           {getFieldDecorator("nama")(<Input />)}
      //         </Form.Item>
      //         <Form.Item label="Password">
      //           {getFieldDecorator("pass")(<Input />)}
      //         </Form.Item>
      //         <Form.Item label="S/N">
      //           {getFieldDecorator("sn")(<Input />)}
      //         </Form.Item>
      //         <Form.Item>
      //           <Button type="primary" htmlType="submit">
      //             Confirm
      //           </Button>
      //         </Form.Item>
      //       </Form>
      //     </Content>
      //   </Layout>
      // </Layout>
    );
  }
}

// export const Home = Form.create({ name: "register" })(App);
export default App;
