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
import axios from "axios";

import "antd/dist/antd.css";
import "./App.css";
import React, { useState } from "react";
const { Header, Sider, Content } = Layout;
export default function App() {
  // state = {
  //   collapsed: true,
  // };
  // axios.get("/api/data")
  // .then(res=>{
  //   console.log(res);
  // })

  // axios.post("/api/data",[
  //   {
      // "key": "1",
      // "firstName":  "NewJohn",
      // "lastName":  "Brown",
      // "age":  32,
      // "address":  "New York No. 1 Lake Park",
      // "tags":  ["nice", "developer"]
  //   }])
  // .then(res=>{
  //   console.log(res);
  // })
  

  const [mycollapsed, setCollapsed] = useState(true)
  const toggle = () => {
    setCollapsed(!mycollapsed);
  };
  
  //const props = this.props;
  return (
    <Provider store={model}>
      <BrowserRouter>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={mycollapsed}
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
                mycollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
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


// export default function App() {

//   return (
//     <Provider store={model}>
//       <BrowserRouter>
//         <div className="App">
//           {/* ????????? */}
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
//           {/* ?????????????????? */}
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
