import React from 'react';
import {connect} from 'react-redux';
import SpinnerComponent from '../spinner/spinner';
import * as OrderAction from './OrderAction';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
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
    constructor(props){
        super(props);
        this.state = {
            dia1:0,
            dia2:0,
            dia3:0
        };
            
    }
    componentDidMount(){
        this.props.number1();
        Active(this);
        // this.props.hid();
    }
    back(){
        this.props.router.goBack();
    }
    componentDidUpdate(props,nextState){
        Active(this);

    }
    render(){
         var dia1=0;
         var dia2=0;
         var dia3=0;
         for(var i=0;i<this.props.order.length;i++){
            if(this.props.order[i][0].status==1){
                    dia1+=1;
            }else if(this.props.order[i][0].status==2){
                    dia2+=1;
            }else {
                dia3+=1;
            }
        }

         var lis = <ul className="Oul-1">
                    <li><Link to="all">全部</Link>{this.props.order.length>0?<span className="spanhid">{this.props.order.length}</span>:''}</li>
                    <li><Link to="shipments">待付款</Link>{dia1>0?<span className="spanhid">{dia1}</span>:''}</li>
                    <li><Link to="await">待发货</Link>{dia2>0?<span className="spanhid">{dia2}</span>:''}</li>
                    <li><Link to="receiving">待收货</Link>{dia3>0?<span className="spanhid">{dia3}</span>:''}</li>
                    <li><Link to="evaluate">待评价</Link></li>
                </ul>

        return (
            <div className="xc_container">
                <header className="Oheader">
                    <Link to="my" onClick={this.back.bind(this)}>
                    <i className="glyphicon glyphicon-menu-left i12">
                    </i></Link>
                    <div className="Odiv-1"><p>我的订单</p></div>
                </header>
                {lis}
                <div className="body">{this.props.children}</div>
            </div>
        )
    }
}
const mapStateToProps = function(state){  
    return {
        order: state.order.dataset || [],        
    }
}
export default connect(mapStateToProps,OrderAction)(OrderComponent)