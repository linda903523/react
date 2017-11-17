import React from 'react';
import {connect} from 'react-redux';
import * as shipmentsAction from './shipmentsAction';

class ShipmentsComponent extends React.Component{
    componentDidMount(){
        this.props.xc1();
    }
    render(){
        return (
            <div className="ediv-1">
                <ul className="ship-ul">
                    <li><img src="./src/img/b.png"/><span>毒物宠店</span></li>
                    <li className="li"><span>待付款</span></li>
                </ul>
                <ul className="eu3" >
                    {
                       (this.props.shipments ? this.props.shipments : []).map(function(item,index){
                            return (
                            <li key={'li'+index} className="eli">
                                <img src={item.img}/>
                                <span>{item.name}</span>
                                <p><span>￥{item.price}</span></p>
                                <p><span>x{item.number}</span></p>
                            </li>
                            )
                        })
                    }
                     <ul className="ship-ul1">
                        <li>
                            <span>商品金额</span><span>￥<span></span></span>
                            </li>
                        <li>
                            <span>毒币抵扣：</span><span>- ￥ <span>0.00</span></span>
                        </li>
                        <li>
                            <span>运费：</span><span>+ ￥ 18.00</span>
                        </li>
                        <li>
                            <span>待支付：</span><span>￥<span></span></span>
                        </li>
                        <li className="li" >
                            <div>取消订单</div><div onClick={this.props.zhifu.bind(this,this.props.shipments)} className="eli-1">去支付</div>
                        </li>
                    </ul>
                </ul>                
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        shipments:state.shipments.dataset || []
    }
}
export default connect(mapStateToProps,shipmentsAction)(ShipmentsComponent)