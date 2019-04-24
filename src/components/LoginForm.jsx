import React, { Component } from 'react';

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
            // luu giá trị vào session 
            sessionStorage.setItem('user', JSON.stringify({
                username: txtUsername,
                password: txtPassword
            }));
            //chuyển trang ve trang home
            this.props.history.push('/home');
        }
        //gọi giá trị session ra với getItem
        console.log(sessionStorage.getItem('user'));
    }

    render() {
        
        return (
            <div className="display_full">
                <div className="display_col">
                    <div className="login_container">
                        <div className="login_center">
                            <img src="../img/crmlogo.png" alt="crmlogo" style={{ height: '80px' }} />
                            <div className="login_form">
                                <div className="form-group">
                                    <div className="row" style={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <div className="col-sm-12">
                                            <div>
                                                <div className="flag-right" >
                                                    <img src="../img/flagEnglish.png" alt="Eng" style={{ height: '35px', width: '32px' }} />
                                                </div>
                                                <div className="flag-right" >
                                                    <img src="../img/flagVN.png" alt="VN" style={{ marginRight: '2px', marginTop: '6px', height: '23px', width: '35px' }} />
                                                </div>
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
                                <img src="../img/login-bottom.png" alt="login"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;