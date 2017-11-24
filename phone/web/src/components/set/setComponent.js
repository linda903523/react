import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

class SetComponent extends React.Component{
    componentDidMount(){
    }
    out(){
        var date = new Date();
        date.setDate(date.getDate()-7);
        document.cookie = 'username=xx;expires=' + date.toString();
        hashHistory.push({
            pathname:'login'
        })
        location.reload();
    }
    render(){
        return (
            <div className="xc_container">
                <header className="Sheader">
                    <Link to="my">
                    <i className="glyphicon glyphicon-menu-left i12">
                    </i></Link>
                    <div className="Odiv-1"><p>设置</p></div>
                </header>
                <div className="body set">
                    <ul>
                    <li>
                        <span>消息提醒</span>
                        <i className="glyphicon glyphicon-menu-right i12">
                        </i>
                    </li>
                    <li>
                        <span>推荐朋友</span>
                         <i className="glyphicon glyphicon-menu-right i12">
                        </i>
                    </li>
                    <li>
                        <span>清除缓存</span>
                         <i className="glyphicon glyphicon-menu-right i12">
                        </i>
                    </li>
                    <li>
                        <span>隐私政策</span>
                         <i className="glyphicon glyphicon-menu-right i12">
                        </i>
                    </li>
                    <li>
                        <span>社区规范</span>
                         <i className="glyphicon glyphicon-menu-right i12">
                        </i>
                    </li>
                    <li>
                        <span>服务条款</span>
                         <i className="glyphicon glyphicon-menu-right i12">
                        </i>
                    </li>
                    </ul>
                    <p onClick={this.out}>退出登录</p>                   
                </div>
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {}
}
export default connect(mapStateToProps)(SetComponent)