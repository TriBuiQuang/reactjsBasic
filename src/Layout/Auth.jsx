import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import '../App.css';

import routes from "../routes.js";

class App extends Component{
  constructor(props){
    super(props);
  }
  // function gerroutes có giá trị truyền vào là routes từ file routes truyền xuống
  getRoutes = routes => {
    // vòng lặp gọi hết giá trị trong routes . mỗi vòng là mang giá trị duy nhất key
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    // khung trang auth .. no1 sẽ gọi function getRoutes xuống render chỗ switch ...
    return(
      <div className="App">
        <Switch>{this.getRoutes(routes)}</Switch>
      </div>
    );
  }
}
export default App;
