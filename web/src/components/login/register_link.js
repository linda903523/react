import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery'
import * as COM from '../../lib/common'
import baseUrl from '../../utils/baseUrl.js';

class Registers extends Component{
    // 验证码点击事件
    changeCode(){
        $('.code').html(COM.vcode(5))
    }
    // 验证码失去焦点触发
    changeCodes(){
        $('.register_passed').next('p').css({display:'none'});
    }
    // 注册用户失去焦点触发
    blueReg(){
        var str = $('.register_user').val()
        var veg = /^[\u2E80-\u9FFF]+$/.test(str);
        var res = str.match(veg);
        if(veg){
            $('.register_user').next('p').css({display:'block'});
            var username = $('.register_user').val();
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    $('.register_user').next('p').html(xhr.responseText)
                }
            }
            xhr.open('get',baseUrl+'register_user.php?username='+username,true);
            xhr.send();
        } else {
            $('.register_user').next('p').css({display:'block'}).html('用户名不符合标准');
        }
    }
    bluePAss(){
        // $('.register_pass').next('p').css({display:'none'});
    }
    // 设置密码失去焦点触发
    bluePass(){
        $('.register_user').next('p').css({display:'none'});
        var str = $('.register_pass').val()
        var veg = /^[a-zA-Z][\w\-]{5,19}$/.test(str);
        if(veg){
            $('.register_pass').next('p').css({display:'block'}).html('密码符合标准');
        } else {
            $('.register_pass').next('p').css({display:'block'}).html('密码不符合标准');
        }
    }
    // 重复密码失去焦点触发
    bluePassed(){
        $('.register_pass').next('p').css({display:'none'});
        if($('.register_pass').val() == $('.register_passed').val()){
            $('.register_passed').next('p').css({display:'block'}).html('匹配成功');
        } else {
            $('.register_passed').next('p').css({display:'block'}).html('密码不匹配');
        }
    }
    render(){
        // var value = this.state.value;
        return (      
            <div className="register">
                <leble><span>设置用户名</span><input type="text" onBlur={this.blueReg} className="register_user" placeholder="只能用中文" />
                    <p>判断中</p>
                </leble>
                <leble><span>设置密码</span><input type="password" onBlur={this.bluePass} onFocus={this.bluePAss} className="register_pass" placeholder="必须字母开头·数字·字母 6-18" />
                    <p>密码不符合标准</p>
                </leble>
                <leble><span>确认密码</span><input type="password" onBlur={this.bluePassed} onFocus={this.bluePAss} className="register_passed" placeholder="必须字母开头·数字·字母 6-18" />
                    <p>密码不匹配</p>
                </leble>
                <leble><span>验证码</span><input type="text" onBlur={this.changeCodes} onFocus={this.changeCode} placeholder="请输入验证码" /><i className="code">验证码</i>
                </leble>
            </div>
        )
    }
}
export default Registers