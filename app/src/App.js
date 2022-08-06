import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./App.css";
import { Layout, Menu } from "antd";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

const { Header, Content, Sider } = Layout;

const menuItems = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
  },
  {
    label: "Account",
    key: "account",
  },
];

const App = () => (
  <BrowserRouter>
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={"home"}
          items={menuItems}
        />
      </Header>
      <Layout>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </BrowserRouter>
);

export default App;
