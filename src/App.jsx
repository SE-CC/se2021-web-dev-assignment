import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {Home, Employee, List} from "./pages";
import {Menu} from "antd";
import {AppstoreOutlined, UserOutlined, TeamOutlined} from '@ant-design/icons';

import "antd/dist/antd.css";

export default function App(){
  
  return(
  <BrowserRouter>
    <div className = "App">
      <div>
        <Menu mode="horizontal" theme="dark" >
          <Menu.Item icon = {<AppstoreOutlined/>}>
            <Link to = "/">index</Link>
          </Menu.Item>  
          <Menu.Item icon = {<UserOutlined/>}> 
            <Link to = "/employee">employee</Link>
          </Menu.Item>  
          <Menu.Item icon = {<TeamOutlined/>}>
            <Link to = "/list">list</Link>
          </Menu.Item>
        </Menu>
      </div>
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/employee" exact component = {Employee}/>
        <Route path="/list" exact component = {List}/>
      </Switch>
    </div>
  </BrowserRouter>
  );
};
