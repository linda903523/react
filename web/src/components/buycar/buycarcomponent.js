import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as buycarAction from './buycarAction';
import './buycar.scss';

class BuycarComponent extends React.Component{
    componentDidMount(){
        this.props.Init4();
    }
    render(){
        return (
             <div className="xc_container">
                <header className="Oheader">
                    <Link to="my">
                    <i className="glyphicon glyphicon-menu-left i12">
                    </i></Link>
                    <div className="Odiv-1"><p>我的购物车</p></div>
                </header>
                <div className="body">
                    <div className="bdiv-1">
                           <div className="bdiv-2">
                                <div>
                                    <div className="yuan" onClick={this.props.liang.bind(this)}></div>
                                    <p>毒物宠店<a className="buya">[满399.0顺风包邮]</a></p>
                                </div>
                                <i className="glyphicon glyphicon-menu-right">
                                </i>
                           </div>
                            <ul className="bul">
                                 {
                                   (this.props.carlist ? this.props.carlist : []).map((item,index)=>{
                                        return (
                                        <li key={'li'+index} className="bli">
                                            <div className="yuan1" onClick={this.props.liang.bind(this)}></div>
                                            <Link to={{
                                                pathname:'detail',
                                                query:{
                                                    id:item.id
                                                }
                                            }}><img src={item.img}/></Link>
                                            <div className="buydiv-1">
                                                 <Link to={{
                                                pathname:'detail',
                                                query:{
                                                    id:item.id
                                                }
                                            }}>
                                                <span>{item.name}</span>
                                            </Link>
                                                <div className="buyspan2">
                                                   
                                            <span className="buyspan5">{item.price}元</span>
                                                    <div className="buyspan3">
                                                        <span onClick={this.props.jian.bind(this,index,item.id)}>-</span>
                                                        <span className="number">{item.number}</span>
                                                        <span className="buyspan4" onClick={this.props.jia.bind(this,index,item.id)}>+</span>
                                                    </div> 
                                                </div>
                                            </div>
                                        </li>
                                        )
                                    })
                                }
                            </ul>
                    </div>
                </div>
                <footer className="buyfooter">
                <ul>
                    <li>
                         <div className="yuan2" onClick={this.props.red.bind(this)}></div>
                         <span>全选</span>
                    </li>
                    <li>
                        <span className="buyspan6"><span>总计：</span><span>￥</span><span >(已包邮)</span>
                        </span>
                    </li>

                    <li><button onClick={this.props.jiesuan.bind(this)}>去结算</button></li>
                </ul>
                </footer>
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        carlist:state.buycar.dataset || [],
    }
}
export default connect(mapStateToProps, buycarAction)(BuycarComponent)