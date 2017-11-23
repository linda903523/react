import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import AllComponent from '../all/allComponent';
import OrderAction from './OrderAction';
import './order.scss';

class OrderComponent extends React.Component{
    render(){
        return (
            <div className="xc_container">
                <header className="Oheader">
                    <Link to="my">
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
