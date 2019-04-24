import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: ''
        };
        // prob.onClickSearchGo
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    onLogin = (e) => {
        e.preventDefault();
        var { txtUsername, txtPassword } = this.state;

        if (txtUsername === 'admin' && txtPassword === 'admin') {
            localStorage.setItem('user', JSON.stringify({
                username: txtUsername,
                password: txtPassword
            }));
        }
    }

    render() {
        var { txtUsername, txtPassword } = this.state;
        var loggedInUser = localStorage.getItem('user');
        var { location } = this.props;
        console.log(loggedInUser);


        if (loggedInUser !== null) { // neu da login thi Redirect
            return <Redirect to={{
                pathname: '/',
                state: {
                    from: location
                }
            }} />
        }
    }
    render() {
        return (
            <div className="login_form">
                <div className="form-group">
                    <div className="row" style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <div className="col-sm-12">
                            <div>
                                <a className="flag-right" >
                                    <img src="./img/flagEnglish.png" alt="Eng" style={{ height: '35px', width: '32px' }} />
                                </a>
                                <a className="flag-right" >
                                    <img src="./img/flagVN.png" alt="VN" style={{ marginRight: '2px', marginTop: '6px', height: '23px', width: '35px' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={this.onLogin}>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-12">
                                <div>
                                    <input name="txtUsername"
                                        //value={txtUsername}
                                        onChange={this.onChange}
                                        className="form-control text-editer" type="text" placeholder="TÊN ĐĂNG NHẬP" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-12">
                                <div>
                                    <input name="txtPassword"
                                        //value={txtPassword}
                                        onChange={this.onChange}
                                        className="form-control text-editer" type="text" placeholder="MẬT KHẨU" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success login-bt">ĐĂNG NHẬP</button>
                </form>
            </div>

        );
    }
}

export default LoginForm;