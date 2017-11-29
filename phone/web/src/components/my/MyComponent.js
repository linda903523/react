import React from 'react';
import {connect} from 'react-redux';
import SpinnerComponent from '../spinner/spinner';
import * as MyAction from './MyAction';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import './my.scss';
import CheComponent from '../che/cheComponent';

var username;
var cookies = document.cookie;
if(cookies.length>0){
    cookies = cookies.split('; ');
    cookies.forEach(function(cookie){
        var temp = cookie.split('=');
        if(temp[0] == 'username'){
            username = temp[1].slice(1,-1);
        }
    })
}

class MyComponent extends React.Component{
    componentDidMount(){
        this.props.browse1();
        if(username==undefined){
            hashHistory.push({
                pathname:'login'
            })
        }
    }
    render(){
        return (
            <div className="xc_container">
                <header>
                    <div className="header">
                        <i className="glyphicon glyphicon-user"></i><p>我的</p><i className="glyphicon glyphicon-envelope"></i>
                    </div>
                </header>
                <div className="body">
                    <div className="cdiv-1">
                        <div className="cdiv-2">
                            <img src="./src/img/l3.png" className="cimg-1"/>
                            <div>
                                <span>{this.props.username}</span>
                                <span>官方帐号</span>
                                <span>广东/佛山</span>
                            </div>
                        </div>
                        <i className="glyphicon glyphicon-menu-right i1"></i>
                     </div>
                        <ul className="cul-1">
                            <li className="cli-1"><Link to="buycar"><i className="glyphicon glyphicon-shopping-cart i"></i><span>购物车</span></Link></li>
                            <li><Link to="all"><i  className="glyphicon glyphicon-list-alt i"></i><span>我的订单</span></Link></li>
                        </ul>
                        <div className="tiao"></div>
                    <div className="cdiv-3">
                        <ul className="cul-2">
                            <li><span>0</span><span>毒文</span></li>
                            <li><span>0</span><span>评论</span></li>
                            <li><span>0</span><span>收藏/点赞</span></li>
                            <li><Link to ="browse"><span>{this.props.my.length}</span><span>浏览历史</span></Link></li>
                        </ul>
                        <Link to="du">
                        <ul className="cul-3">
                            <li><span>我的毒币：</span><span>0</span></li>
                            <li className="cli-3"><span>获得与使用</span><i className="glyphicon glyphicon-menu-right i1"></i>
                            </li>
                        </ul>
                         </Link>
                    </div>
                    <div className="tiao"></div>
                    <div className="cdiv-4">
                        <p><i className="glyphicon glyphicon-plus-sign"></i>我中的毒</p>
                        <CheComponent/>
                    </div>
                    <div className="tiao"></div>
                    <Link to="opinion">
                        <div className="cdiv-6">
                            <div>
                                <i className="glyphicon glyphicon-envelope fl_left">
                                </i><span>向CEO提意见</span>
                            </div>
                            <i className="glyphicon glyphicon-menu-right i1 i2"></i>
                        </div>
                    </Link>
                    <div className="tiao"></div>
                    <Link to="set">
                    <div className="cdiv-6">
                        <div>
                            <i className="glyphicon glyphicon-cog fl_left" ></i>
                            <span>设置</span>
                        </div>
                        <i className="glyphicon glyphicon-menu-right i1 i2"></i>
                    </div>
                    </Link>
                </div>
                <div className="fl_bottom">
                    <ul>
                        <Link to="home"><i className="glyphicon glyphicon-hand-right"></i>推荐</Link>
                        <Link to="shopping"><i className="glyphicon glyphicon-gift"></i>商店</Link>
                         <Link to="buycar"><i className="glyphicon glyphicon-shopping-cart"></i>购物车</Link>
                        <Link to="my"><i className="glyphicon glyphicon-user"></i>我的</Link>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        loading: state.my.loading,
        my: state.my.dataset || [],
        username:username
    }
}
export default connect(mapStateToProps, MyAction)(MyComponent)