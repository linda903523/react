import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as moneyAction from './moneyAction';

class MoneyComponent extends React.Component{
    componentDidMount(){
    } 
        
    back(){
        this.props.router.goBack();
    }
    render(){
        return (
            <div className="xc_container">
                <header className="Oheader">
                    <Link onClick={this.back.bind(this)}>
                    <i className="glyphicon glyphicon-menu-left i12">
                    </i></Link>
                    <div className="Odiv-1"><p>收银台</p></div>
                </header>
                <div className="body">
                    <p className="moneyp">选择支付方式</p>
                    <ul className="moneyul">
                        <li onClick={this.props.money.bind(this)} className="moneyli1"><div><span>支付宝</span></div><i className="glyphicon glyphicon-ok-sign moneyi"></i></li>
                        <li onClick={this.props.money.bind(this)}  className="moneyli2"><div><span>微信支付</span></div><i className="glyphicon glyphicon-ok-circle moneyi2"></i></li>
                    </ul>
                </div>
                <footer className="moneyfooter">
                <ul>
                    <li>总计：{this.props.location.state.total}</li>
                    <li>
                    <button onClick={this.props.state.bind(this,this.props.location.state.number)}>去结算</button>
                    </li>
                </ul>
                </footer>
            </div>
        )
    }
}
const mapStateToProps = function(state){   
    return {}
}
export default connect(mapStateToProps,moneyAction)(MoneyComponent)
