import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';
import Directer from './components/Directer';

function App() {
  return (
    <div className="App">
    <Directer />
      <div className="display_full">
        <div className="display_col">
          <div className="login_container">
            <div className="login_center">
              <img src="./img/crmlogo.png" style={{ height: '80px' }} />
              <LoginForm />
              <img src="./img/login-bottom.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
