import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import AllComponent from '../all/allComponent';
import OrderAction from './OrderAction';
import './order.scss';
import $ from 'jquery';

function Active(self){
    switch(self.props.children.props.route.path){
        case '/all':
           $('.Oul-1').children('li').eq(0).addClass('order_active').siblings().removeClass('order_active'); 
           break;
        case '/shipments' :
            $('.Oul-1').children('li').eq(1).addClass('order_active').siblings().removeClass('order_active');
            break;
        case '/await' :
            $('.Oul-1').children('li').eq(2).addClass('order_active').siblings().removeClass('order_active');
            break;
        case '/receiving' :
            $('.Oul-1').children('li').eq(3).addClass('order_active').siblings().removeClass('order_active');
            break;
        case '/evaluate' :
            $('.Oul-1').children('li').eq(4).addClass('order_active').siblings().removeClass('order_active');
            break;
    }
}

class OrderComponent extends React.Component{
    componentDidMount(){
        Active(this);
    }
    back(){
        this.props.router.goBack();
    }
    active(){}
    componentDidUpdate(props,nextState){
        Active(this);
    }
    render(){
        return (
            <div className="xc_container">
                <header className="Oheader">
                    <Link onClick={this.back.bind(this)}>
                    <i className="glyphicon glyphicon-menu-left i12">
                    </i></Link>
                    <div className="Odiv-1"><p>我的订单</p></div>
                </header>
                <ul className="Oul-1">
                    <li><Link to="all">全部</Link></li>
                    <li><Link to="shipments">待付款</Link></li>
                    <li><Link to="await">待发货</Link></li>
                    <li><Link to="receiving">待收货</Link></li>
                    <li><Link to="evaluate">待评价</Link></li>
                </ul>
                <div className="body">{this.props.children}</div>
            </div>
        )
    }
}
const mapStateToProps = function(state){   
    return {}
}
export default connect(mapStateToProps,OrderAction)(OrderComponent)