import React from 'react';
import {connect} from 'react-redux';
import SpinnerComponent from '../spinner/spinner';
import * as PopWindowAction from './PopWindowAction';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import './popwindow.scss'


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
class PopWindowPomponent extends React.Component{
    componentDidMount(){
    }
    cancel(){
        this.props.closePop();
    }
    confirm(){
        this.props.confirm();
    }
    render(){
        if(this.props.show){
            return (
            <div>
                <div className="ym-cover"></div>
                <div className="ym-popwindow">
                    <div className="pop_title">
                        <p>提示</p>
                        <p>确定删除所有历史记录?</p>
                    </div>
                    <ul className="pop_confirm">
                        <li onClick={this.cancel.bind(this)}>取消</li>
                        <li onClick={this.confirm.bind(this)}>确定</li>
                    </ul>
                </div>        
            </div> 
            )
        }else{
            return null;
        }
        
    }
}
const mapStateToProps = function(state){
    return {
        
    }
}
export default connect(mapStateToProps, PopWindowAction)(PopWindowPomponent);