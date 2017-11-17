import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as list1Action from './list1Action';
import './list1.scss';

class List1Component extends React.Component{
    componentDidMount(){
        this.props.Init9();
        this.props.Init8(this.props.list)
    }
    render(){
        return (
             <div className="xc_container">
                <header className="Lheader">
                    <Link to="my">
                    <i className="glyphicon glyphicon-menu-left i12">
                    </i></Link>
                    <div className="Odiv-1"><p>确认订单</p></div>
                </header>
                <div className="body libody">
                    <img src="./src/img/a.png" className="imglist"/>
                    <p>请填写收货地址</p>
                    <div className="tiao"></div>
                    <div className="lidiv-1">
                        <div>
                            <p><img src="./src/img/b.png" className="imglist"/>毒物商店</p>
                        </div>
                        <ul className="liul-1">
                            <li><spapn>正品保证</spapn></li>
                            <li><span>极速发货</span></li>
                            <li><span>无忧退货</span></li>
                        </ul>
                        <ul className="listul">
                            {
                               (this.props.list ? this.props.list : []).map((item,index)=>{
                                    return (
                                        <li key={'li'+index} >
                                            <Link to={{
                                                    pathname:'detail',
                                                    query:{
                                                        id:item.id
                                                    }
                                                }}>
                                                <img src={item.img} className="imglist-2"/>
                                            </Link>
                                            <div className="lidiv-0">
                                                <Link to={{
                                                    pathname:'detail',
                                                    query:{
                                                        id:item.id
                                                    }
                                                }}>
                                                    <p className="lip-2">{item.name}</p>
                                                </Link>    
                                                <p className="lip-1">x{item.number}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="liul-2">
                        <p>配送方式 :</p>
                        <ul className="listul-1">
                            <li>
                                <i className="glyphicon glyphicon-ok-sign"></i>
                                <span>元店铺满399.0</span><span>包邮</span>
                            </li>
                            <li><span>商品金额：</span><span> ￥ </span></li>
                            <li><span>毒币抵扣：</span><span>- ￥ 0.00</span></li>
                            <li><span>运费：</span><span>+ ￥ 0.00</span></li>
                            <li><span>价格合计：</span><span>￥</span></li>
                        </ul>
                        <input type="text" />                       
                    </div>
                </div>
                <footer >
                    <ul className="listfooter">
                        <li>总价：<span className="zongjia"></span></li>
                        <Link to="shipments"><li onClick={this.props.dan.bind(this,this.props.list)}><button>确认下单</button></li></Link>
                    </ul>
                </footer>
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        list:state.list1.dataset || [],
    }
}
export default connect(mapStateToProps,list1Action)(List1Component)
