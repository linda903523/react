import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as ShoppingAction from './ShoppingAction.js';
import SpinnerComponent from '../spinner/spinner';
import './shopping.scss';

class ShoppingComponent extends React.Component{
    componentDidMount(){
        this.props.Init();
    }
    render(){
        var listOther;
        if(this.props.dataset.length>10){
            var list = this.props.dataset.map((item,idx)=>{
                return <li key={'rec'+idx}>
                    <Link to={'detail/:'+item.id}><img src={item.img} /></Link>
                    <strong>{item.price}元</strong>
                    <p>{item.name}</p>
                </li>                         
            })
            listOther = <div>
                <img src="./src/img/banner.png" />
                <section className="section1">
                    <aside>
                        <h2>毒家新品</h2>
                        <ul style={{width:'880px'}}>{list}</ul>
                    </aside>
                    <div className="fl_img">
                        <img src="./src/img/f1.png" />
                        <img src="./src/img/f2.png" />
                        <img src="./src/img/f3.png" />
                        <div className="fl_bot">
                            <img src="./src/img/f4.png" />
                            <img src="./src/img/f5.png" />
                        </div>
                    </div>
                </section>
                <section className="section2">
                    <div>
                        <h2>毒友推荐</h2>
                        <p>大家都在买</p>
                        <ul className="part1">
                            <li><img src="./src/img/g1.png" /></li>
                            <li><img src="./src/img/g2.png" /></li>
                            <li><img src="./src/img/g3.png" /></li>
                        </ul>
                    </div>
                    <div>
                        <h2>毒家</h2>
                        <p>只有这里</p>
                        <ul>
                            <li><img src="./src/img/y10.png" /></li>
                        </ul>
                    </div>
                </section>
            </div>
        }else if(this.props.dataset.length>0 && this.props.dataset.length <= 10){
            var list = this.props.dataset.map((item,idx)=>{
                return <li key={'gar'+idx}>
                    <Link to={'detail/:'+item.id}><img src={item.img} /></Link>
                    <p>{item.name}</p>
                    <strong>{item.price}元</strong>
                </li>
            })
            listOther = <div>
                <img src="./src/img/banner.png" />
                <section className="section3">
                    <ul>{list}</ul>
                </section>
            </div>
        }
        return (
            <div className="fl_contain">
                <SpinnerComponent show={this.props.loading}/>
                <header>
                    <Link to="search"><i className="glyphicon glyphicon-search"></i></Link>
                    <h2>毒物商店</h2>
                    <Link to="buycar" style={{color:'#cacaca'}}><i className="glyphicon glyphicon-shopping-cart"></i></Link></header>
                <main>
                    <div>
                        <nav>
                            <ul onClick={this.props.navChange.bind(this)}>
                                <li>推荐</li>
                                <li>家居</li>
                                <li>理容</li>
                                <li>工具</li>
                                <li>玩物</li>
                                <li>运动</li>
                                <li>穿搭</li>
                                <li>影音</li>
                                <li>美食</li>
                                <li>文具</li>
                                <li>美酒</li>
                                <li>腕表</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="fl_list">{listOther}</div>                  
                </main>
                <div className="fl_bottom">
                    <ul>
                        <Link to="home"><i className="glyphicon glyphicon-hand-right"></i>推荐</Link>
                        <Link to="shopping"><i className="glyphicon glyphicon-gift"></i>商店</Link>
                        <Link to="buycar"><i className="glyphicon glyphicon-shopping-cart"></i>购物车</Link>
                        <Link to="my"><i className="glyphicon glyphicon-user"></i>我的</Link>
                    </ul>
                </div>
            </div>
        )
    }
}

var mapStateToProps = function(state){
    return {
        loading:state.shopping.loading,
        dataset:state.shopping.dataset || [],
        itemset:state.shopping.itemset || []
    }
}

export default connect(mapStateToProps,ShoppingAction)(ShoppingComponent)