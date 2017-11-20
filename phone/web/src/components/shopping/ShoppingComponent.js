import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as ShoppingAction from './ShoppingAction.js';
import SpinnerComponent from '../spinner/spinner';
import './shopping.scss';

class ShoppingComponent extends React.Component{
    render(){
        return (
            <div className="fl_contain">
                <SpinnerComponent show={this.props.loading}/>
                <header>
                    <Link to="search"><i className="glyphicon glyphicon-search"></i></Link>
                    <h2>毒物商店</h2>
                    <Link to="buycar" style={{color:'#cacaca'}}><i className="glyphicon glyphicon-shopping-cart"></i></Link></header>
                <main>
                    <div>
                        <nav>
                            <ul onClick={this.props.navChange.bind(this)}>
                                <li><Link to="list">推荐</Link></li>
                                <li><Link to="listType/:1">家居</Link></li>
                                <li><Link to="listType/:2">理容</Link></li>
                                <li><Link to="listType/:3">工具</Link></li>
                                <li><Link to="listType/:4">玩物</Link></li>
                                <li><Link to="listType/:5">运动</Link></li>
                                <li><Link to="listType/:6">穿搭</Link></li>
                                <li><Link to="listType/:7">影音</Link></li>
                                <li><Link to="listType/:8">美食</Link></li>
                                <li><Link to="listType/:9">文具</Link></li>
                                <li><Link to="listType/:10">美酒</Link></li>
                                <li><Link to="listType/:11">腕表</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="fl_list">{this.props.children}</div>                  
                </main>
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

var mapStateToProps = function(state){    
    return {
        loading:state.shopping.loading,
        dataset:state.shopping.dataset || []
    }
}

export default connect(mapStateToProps,ShoppingAction)(ShoppingComponent)