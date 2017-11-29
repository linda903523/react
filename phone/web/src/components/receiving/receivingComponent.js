import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import * as receivingActive from './receivingActive.js';
import {Link} from 'react-router';

class ReceivingComponent extends React.Component{
    componentDidMount(){
        this.props.shouhuo();
    }
    render(){
        return (
            <div>
            {
                this.props.receiving.length==0 ?
                <div className="noorder">
                    <p>您还没有相关订单</p>
                    <p>可以去看看有哪些想买的</p>
                </div>:
                <div>
                    {
                        (this.props.receiving ? this.props.receiving : []).map((item,index)=>{ 
                            return (
                                <div className="ediv-1">
                                    <ul className="ship-ul">
                                        <li><img src="./src/img/b.png"/><span>毒物宠店</span></li>
                                        <li className="li"><span>已付款</span></li>
                                    </ul>
                                    {
                                        item.map((it,idx)=>{
                                            return (
                                                <ul className="orderlist">
                                                    <li>
                                                        <img src={it.imgurl} />
                                                        <div>
                                                            <p>{it.name}</p>
                                                            <p className="de"> 
                                                                <p className="de_bottom">
                                                                <span>{it.color?`颜色:${it.color}`:''}</span>
                                                                <span>{it.size?`尺寸:${it.size}`:''}</span>
                                                                </p>
                                                                <span>x<span className="_goodsqty">{it.number}</span></span>
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            )
                                        })
                                    }    
                                    <div className="eu3" >
                                        {
                                        item[0].totalprice>399?
                                        <ul className="ship-ul1">
                                            <li>
                                                <span>商品金额</span><span>￥<span>{item[0].totalprice}</span></span>
                                                </li>
                                            <li>
                                                <span>毒币抵扣：</span><span>- ￥ <span>0.00</span></span>
                                            </li>
                                            <li>
                                                <span>运费：</span><span>+ ￥ 0.00</span>
                                            </li>
                                            <li>
                                                <span>待支付：</span><span>￥<span>{item[0].totalprice}</span></span>
                                            </li>
                                            <li className="li" >
                                            <div className="cqx">退货</div><div className="czf">确认收货</div>
                                            </li>
                                            
                                        </ul>:
                                        <ul className="ship-ul1">
                                            <li>
                                                <span>商品金额</span><span>￥<span>{item[0].totalprice}</span></span>
                                                </li>
                                            <li>
                                                <span>毒币抵扣：</span><span>- ￥ <span>0.00</span></span>
                                            </li>
                                            <li>
                                                <span>运费：</span><span>+ ￥ 18.00</span>
                                            </li>
                                            <li>
                                                <span>待支付：</span><span>￥<span>{(Number(item[0].totalprice)+18.00).toFixed(2)}</span></span>
                                            </li>
                                            <li className="li" >
                                                <div className="cqx" >退货</div><div  className="czf">确认收货</div>
                                            </li>
                                        </ul>
                                        }
                                    </div>                
                                </div>
                            )
                        })
                    }
                </div>
            }
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        receiving: state.receiving.dataset || []
    }
}

export default connect(mapStateToProps,receivingActive)(ReceivingComponent)