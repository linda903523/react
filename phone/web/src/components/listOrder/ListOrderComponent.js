import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as ListOrderAction from './ListOrderAction';
import './ListOrder.scss';

class ListOrderComponent extends React.Component{
    componentDidMount(){
        // this.props.Init9();
        // this.props.Init8(this.props.list)
        console.log(this.props)
    }
    back(){
        this.props.router.goBack();
    }
    render(){
        if(this.props.location.query.totalprice>399){
            var tp=<ul className="listul-1">
                <li>
                    <i className="glyphicon glyphicon-ok-sign"></i>
                    <span>元店铺满399.0包邮</span>
                </li>
                <li>
                    <span>商品金额：</span>
                    <span> ￥{this.props.location.query.totalprice}</span>
                </li>
                <li><span>毒币抵扣：</span><span>- ￥ 0.00</span></li>
                <li><span>运费：</span><span>+ ￥ 0.00</span></li>
                <li>
                    <span>价格合计：</span>
                    <span>￥{this.props.location.query.totalprice}</span>
                </li>
            </ul>
        }else{
            var tp=<ul className="listul-1">
                <li>
                    <i className="glyphicon glyphicon-ok-sign"></i>
                    <span>元店铺满399.0包邮</span>
                </li>
                <li>
                    <span>商品金额：</span>
                    <span> ￥{this.props.location.query.totalprice} </span>
                </li>
                <li><span>毒币抵扣：</span><span>- ￥ 0.00</span></li>
                <li><span>运费：</span><span>+ ￥ 18.00</span></li>
                <li>
                    <span>价格合计：</span>
                    <span className="total_price">￥{(Number(this.props.location.query.totalprice)+18.00).toFixed(2)}</span>
                </li>
            </ul>
        }
        return (
             <div className="xc_container">
                <header className="Lheader">
                    <Link onClick={this.back.bind(this)}>
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
                               (this.props.location.state ? this.props.location.state : []).map((item,index)=>{
                                    return (
                                        <li key={'li'+index} >

                                            <img src={item.imgurl} className="imglist-2"/>
                                           
                                            <div className="lidiv-0">
                                                <Link to={{
                                                    pathname:'detail',
                                                    query:{
                                                        id:item.id
                                                    }
                                                }}>
                                                    <p className="lip-2">{item.name}</p>
                                                </Link>    
                                                <div className="lip-1">
                                                <p className="gt">
                                                    颜色：<span className="gc">{item.color}</span>
                                                    尺寸：<span className="gz">{item.size}</span>
                                                </p>
                                                <p>x<span className="gq">{item.number}</span></p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="liul-2">
                        <p>配送方式 :</p>
                        {tp}
                        <input type="text" />                       
                    </div>
                </div>
                <footer >
                    <ul className="listfooter">
                        <li>总价：<span className="zongjia">{
                            this.props.location.query.totalprice>399?this.props.location.query.totalprice:(Number(this.props.location.query.totalprice)+18.00).toFixed(2)
                        }</span></li>
                        <Link to="all"><li onClick={this.props.xiadan.bind(this,this.props.location.state,this.props.location.query)}><button>确认下单</button></li></Link>
                    </ul>
                </footer>
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        list:state.ListOrder.dataset || []
    }
}
export default connect(mapStateToProps,ListOrderAction)(ListOrderComponent)