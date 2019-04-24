import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import Auth from './Layout/Auth.jsx';
import Home from './Layout/Home.jsx';
const hist = createBrowserHistory();

ReactDOM.render(
    // router để đổi đường link , history để nhớ đường dẫn
  <Router history={hist}>
    <Switch>
        {/* nếu mà đường dẫn bắt đầu từ /auth thì nó sẽ render ra layout auth với gía trị truyền vào là tất cả thuộc tính của file nay */}
      <Route path="/auth" render={props => <Auth {...props} />} />
      <Route path="/" render={props => <Home {...props} />} />
      {/* khi moi71 vô trang web nó sẽ điều hướng` vào login */}
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
