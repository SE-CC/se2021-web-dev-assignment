import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home, Employee, List } from "./pages";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AppstoreOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Provider } from "react-redux";
import model from "./models";

import "antd/dist/antd.css";
import "./App.css";
import React, { Component } from "react";

const { Header, Sider, Content } = Layout;

export default class App extends Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const props = this.props;
    return (
      <Provider store={model}>
        <BrowserRouter>
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
              style={{
                overflow: "auto",
                height: "100vh",
                left: 0,
              }}
            >
              {/* <div className="logo" /> */}
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<AppstoreOutlined />}>
                  <Link to="/">index</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                  <Link to="/employee">employee</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<TeamOutlined />}>
                  <Link to="/list">list</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )}
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 400,
                }}
              >
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/employee" exact component={Employee} />
                  <Route path="/employee/:key" exact component={Employee} />
                  <Route path="/list" exact component={List} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

// export default function App() {

//   return (
//     <Provider store={model}>
//       <BrowserRouter>
//         <div className="App">
//           {/* 菜单栏 */}
//           <div>
//             <Menu mode="horizontal" theme="dark" >
//               <Menu.Item icon={<AppstoreOutlined />}>
//                 <Link to="/">index</Link>
//               </Menu.Item>
//               <Menu.Item icon={<UserOutlined />}>
//                 <Link to="/employee">employee</Link>
//               </Menu.Item>
//               <Menu.Item icon={<TeamOutlined />}>
//                 <Link to="/list">list</Link>
//               </Menu.Item>
//             </Menu>
//           </div>
//           {/* 实现页面跳转 */}
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/employee" exact component={Employee} />
//             <Route path="/list" exact component={List} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     </Provider>
//   );
// };
