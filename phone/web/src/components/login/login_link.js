import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

class Logins extends Component{
    loginUser(){
        $('.login_pass').removeClass('active')
        $('.login_user').addClass('active')
    }
    loginPass(){
        $('.login_state').css({display:'none'}) 
        $('.login_user').removeClass('active')
        $('.login_pass').addClass('active')
    }
    render(){
        return (
            <div className="login">
                <leble><span>用户名</span><input type="text" onFocus={this.loginUser} placeholder="用户名" className="login_user" /></leble>
                <leble><span>密码</span><input type="password" onFocus={this.loginPass} placeholder="密码" className="login_pass"/></leble>
                <div className="login_state">
                    <p>sas</p>
                    <p>fff</p>
                </div>
            </div>
        )
    }
}
export default Logins