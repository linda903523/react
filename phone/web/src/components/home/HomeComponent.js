import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import $ from "jquery";
import * as HomeAction from './HomeAction';
import SpinnerComponent from '../spinner/spinner';
import iScroll from '../../utils/iscroll-master/build/iscroll-probe.js';
import LbtComponent from '../lbt/LbtComponent.js';
import ChoseComponent from '../chose/ChoseComponent.js';
import LoadmoreComponent from '../loadmore/LoadmoreComponent.js';
import './home.scss'

class HomeComponent extends React.Component{    
    render(){
        return (
            <div className="home">
                <div className="hometop">
                    <li><Link to="search"><i className="glyphicon glyphicon-search"></i></Link></li>
                    <li><i className="glyphicon glyphicon-heart-empty"></i></li>
                    <li><i className="glyphicon glyphicon-qrcode"></i></li>
                </div>
                <LbtComponent />
                <ChoseComponent />
                <LoadmoreComponent change={this.changeColor.bind(this)} ref="more"/>
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

    changeColor(scrollTop){
        if(this.refs.top){
            this.refs.top.changeColor(scrollTop)
        }            
    }
}

const mapStateToProps = function(state){
    return {
        loading: state.home.loading
    }
}

export default connect(mapStateToProps, HomeAction)(HomeComponent)