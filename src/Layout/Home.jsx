import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import '../App.css';

import routes from "../routes.js";

class App extends Component{
  constructor(props){
    super(props);
  }
  getRoutes = routes => {
   
    
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === "") {
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
    return(
      <div className="App">
        <Switch>{this.getRoutes(routes)}</Switch>
      </div>
    );
  }
}
export default App;
