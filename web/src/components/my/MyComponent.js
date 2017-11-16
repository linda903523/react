import React from 'react';
import {connect} from 'react-redux';
import SpinnerComponent from '../spinner/spinner';
import * as MyAction from './MyAction';
import {Link} from 'react-router';
import './my.scss';

class MyComponent extends React.Component{
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
                                <span>徐翠</span>
                                <span>微信</span>
                                <span>广东/佛山</span>
                            </div>
                        </div>
                        <i className="glyphicon glyphicon-menu-right i1"></i>
                     </div>
                        <ul className="cul-1">
                            <li className="cli-1"><Link to="buycar"><i className="glyphicon glyphicon-shopping-cart i"></i><span>购物车</span></Link></li>
                            <li><Link to="order"><i  className="glyphicon glyphicon-list-alt i"></i><span>我的订单</span></Link></li>
                        </ul>
                        <div className="tiao"></div>
                    <div className="cdiv-3">
                        <ul className="cul-2">
                            <li><span>0</span><span>毒文</span></li>
                            <li><span>0</span><span>评论</span></li>
                            <li><span>0</span><span>收藏/点赞</span></li>
                            <li><span>0</span><span>浏览历史</span></li>
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
                        <h3><p>你还没中毒过任何毒物</p></h3>
                        <div className="cdiv-5">
                            <img src="./src/img/j2.png"/>
                        </div>
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
                        <Link to=""><i className="glyphicon glyphicon-star"></i>社区</Link>
                        <Link to="shopping"><i className="glyphicon glyphicon-gift"></i>商店</Link>
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
    }
}
export default connect(mapStateToProps, MyAction)(MyComponent)
                
               