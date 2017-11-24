import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import baseUrl from '../../utils/baseUrl.js';
import * as LoginAction from './LoginAction';
import './Login.scss'

class LoginComponent extends React.Component{    
    componentDidMount(){      
        if(this.props.location.pathname == '/login'){
            $('.on_login').css({background:'#2d2828'}).siblings('span').css({background:''})
            $('.on_register a').css({color:''})
            $('.on_login a').css({color:'#da5c5c'})
            $('.btn span').eq(1).animate({left:'80%',width:'40px',lineHeight:'40px',fontSize:'15px'}).css({color:'#dcc4c4'})
            $('.btn span').eq(0).animate({left:'50%',width:'100px',lineHeight:'100px',fontSize:'30px'}).css({color:'#da5c5c'})
        } else {
            $('.on_register').css({background:'#2d2828'}).siblings('span').css({background:''})
            $('.on_register a').css({color:'#da5c5c'})
            $('.on_login a').css({color:''})
            $('.btn span').eq(0).animate({left:'20%',width:'40px',lineHeight:'40px',fontSize:'15px'}).css({color:'#dcc4c4'})
            $('.btn span').eq(1).animate({left:'50%',width:'100px',lineHeight:'100px',fontSize:'30px'}).css({color:'#da5c5c'})
        }
        
    }
    back(){
        hashHistory.push({
            pathname:'home'
        })
    }
    chnageLogin(e){
        $('.on_login').css({background:'#2d2828'}).siblings('span').css({background:''})
        $('.on_register a').css({color:''})
        $('.on_login a').css({color:'#da5c5c'})
        $('.btn span').eq(1).animate({left:'80%',width:'40px',lineHeight:'40px',fontSize:'15px'}).css({color:'#dcc4c4'})
        $('.btn span').eq(0).animate({left:'50%',width:'100px',lineHeight:'100px',fontSize:'30px'}).css({color:'#da5c5c'})
    }
    chnageRegister(e){
        $('.on_register').css({background:'#2d2828',color:'#da5c5c'}).siblings('span').css({background:'',color:''})
        $('.on_register a').css({color:'#da5c5c'})
        $('.on_login a').css({color:''})
        $('.btn span').eq(0).animate({left:'20%',width:'40px',lineHeight:'40px',fontSize:'15px'}).css({color:'#dcc4c4'})
        $('.btn span').eq(1).animate({left:'50%',width:'100px',lineHeight:'100px',fontSize:'30px'}).css({color:'#da5c5c'})
    }
    changeBtn_login(){
        if($('.on_login').attr('style')){
            var username = $('.login_user').val();
            var password = $('.login_pass').val()
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                // console.log(xhr.readyState)
                if(xhr.readyState === 4){
                    // console.log(xhr.responseText)
                    if(xhr.responseText == '用户名不存在'){
                        alert('用户不存在')
                    }
                    else if(xhr.responseText == '密码不匹配'){
                        $('.login_state').css({display:'block'});
                        $('.login_state p').eq(0).html(xhr.responseText)
                        $('.login_state p').eq(1).html('亲，密码忘记了吗？')
                    } 
                    else {
                        alert('成功登录');
                        var date = new Date();
                        date.setDate(date.getDate()+7);//7天后的时间
                        document.cookie = 'username='+xhr.responseText+';expires=' + date.toString();
                        // document.cookie=xhr.responseText;
                        
                        hashHistory.push({pathname:'/home'});
                        location.reload()
                    }
                }
            }
            xhr.open('get',baseUrl+'login.php?username='+username+'&password='+password,true);
            xhr.send();
        }
    }
    // 注册
    changeBtn_register(){
        if($('.on_register').attr('style')){
            if($('.register_user').next('p').html() == '可以注册' && $('.register_pass').next('p').html() == '密码符合标准' && $('.register_passed').next('p').html() == '匹配成功' && $('.code').prev('input').val() == $('.code').html()){
                var password = $('.register_pass').val()
                var username = $('.register_user').val()
                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function(){
                    // console.log(xhr.readyState)
                    if(xhr.readyState === 4){
                        // console.log(xhr.responseText)
                        if(xhr.responseText == "注册成功"){
                            alert('恭喜你！注册成功！')
                            hashHistory.push({pathname:'/login'});
                        } else {
                            alert(xhr.responseText)
                        }
                    }
                }
                xhr.open('get',baseUrl+'register.php?username='+username+'&password='+password,true);
                xhr.send();
            } else {
                alert('条件未完全符合')
            }
        }
    }
    changeShade(){
        $('.shade').css({display:'none'})
        $('.on_login').css({background:'#2d2828 '}).siblings('span').css({background:''})
        $('.btn span').eq(1).animate({left:'80%',width:'100px',lineHeight:'100px',fontSize:'30px'})
        $('.btn span').eq(0).animate({left:'50%',width:'300px',lineHeight:'300px',fontSize:'30px'})
    }
    
    render(){
        return (
            <div id="box">
                <div id="main">
                    <div className="backhome"><span className="glyphicon glyphicon-menu-left" onClick={this.back.bind(this)}></span></div>
                    <div className="Switch">
                        <span onClick={this.chnageLogin} className="on_login"><Link to="/login">登录</Link></span>
                        <span onClick={this.chnageRegister} className="on_register"><Link to="/register">注册</Link></span>
                    </div>
                    <div>{this.props.children}</div>
                    <div className="btn">
                        <span className="btn_login" onClick={this.changeBtn_login}>登录</span>
                        <span className="btn_register" onClick={this.changeBtn_register}>注册</span>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        // loading: state.student.loading,
        // dataset: state.student.dataset || []
    }
}

export default connect(mapStateToProps, LoginAction)(LoginComponent)