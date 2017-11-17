import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import * as buycarAction from './buycarAction';
import $ from 'jquery';
import './buycar.scss';

class BuycarComponent extends React.Component{
    componentDidMount(){
        this.props.Init4();
    }
    // 全选反选
    Buy(){
        var tota=0;
        if($('.input-buy')[0].checked){
            for(var i=0;i<$('.buyinput').length;i++){
                $('.buyinput')[i].checked = true;
                $('.Reds')[0].checked = true;
                // tota += Number($('.buyinput').next('a').find('img').eq(i).attr("class"))
                tota += Number($('.buyspan3').eq(i).find('i').attr("class"))
            }
            $('.buyspan6 span').eq(1).html(tota);
        } else {
            for(var i=0;i<$('.buyinput').length;i++){
                $('.buyinput')[i].checked = false;
            }
            $('.Reds')[0].checked = false;
            tota += Number($('.buyspan3').eq(i).find('i').attr("class"))
            $('.buyspan6 span').eq(1).html(tota);
        }
    }
    changeInds(e,price){
        var tota=0;
        var xv=0;
        for(var i=0;i<$('.buyinput').length;i++){
            if($('.buyinput')[i].checked){
                xv++
                $('.input-buy')[0].checked=false;
                $('.Reds')[0].checked=false;
                if(xv>=$('.buyinput').length){
                    $('.input-buy')[0].checked=true;
                    $('.Reds')[0].checked=true;
                }
                tota += Number($('.buyspan3').eq(i).find('i').attr("class"))
                // tota += Number($('.buyinput').next('a').find('img').eq(i).attr("class"))
                // console.log($('.buyinput').next('a').find('img').eq(i).attr("class"));
            }
                
        }
        $('.buyspan6 span').eq(1).html(tota);
    }
    red(){
        var tota=0;
        if($('.Reds')[0].checked){
            $('.input-buy')[0].checked=true;
            for(var i=0;i<$('.buyinput').length;i++){
                $('.buyinput')[i].checked=true;
                // tota += Number($('.buyinput').next('a').find('img').eq(i).attr("class"))
                tota += Number($('.buyspan3').eq(i).find('i').attr("class"))
            }
            $('.buyspan6 span').eq(1).html(tota);
        } else {
            for(var i=0;i<$('.buyinput').length;i++){
                $('.buyinput')[i].checked=false;
            }
            $('.input-buy')[0].checked=false;
            tota += Number($('.buyspan3').eq(i).find('i').attr("class"))
            $('.buyspan6 span').eq(1).html(tota);
        }
    }
    minued(e){
        // console.log($(e.target).parent('.buyspan3').parent('.buyspan2').parent('.buydiv-1').parent('.bli').find('input'))
        if($(e.target).parent('.buyspan3').parent('.buyspan2').parent('.buydiv-1').parent('.bli').find('input')[0].checked){
            var num = Number($(e.target).next('span').html())-1;
            var price = $(e.target).attr("class");
            var tota = num*price
            $('.buyspan6 span').eq(1).html(tota);
            // $('.buyspan6 span').eq(1).attr({class:tota})
            $(e.target).siblings('i').attr({class:tota})
            var totasd=0;
            for(var i=0;i<$('.bli input').length;i++){
                if($('.bli input').eq(i)[0].checked){
                    totasd += Number($('.buyspan3').eq(i).find('i').attr("class"))
                }
                $('.buyspan6 span').eq(1).html(totasd);
            }
        }
        // console.log($('.bli input'))
        
    }
    minus(e){
        if($(e.target).parent('.buyspan3').parent('.buyspan2').parent('.buydiv-1').parent('.bli').find('input')[0].checked){
            var num = Number($(e.target).prev('span').html())+1;
            var price = $(e.target).prev('span').prev('span').attr("class");
            var tota = num*price
            $('.buyspan6 span').eq(1).attr({class:tota})
            $(e.target).siblings('i').attr({class:tota})
            var totasd=0;
            for(var i=0;i<$('.bli input').length;i++){
                if($('.bli input').eq(i)[0].checked){
                    totasd += Number($('.buyspan3').eq(i).find('i').attr("class"))
                }
                $('.buyspan6 span').eq(1).html(totasd);
            }
        }
    }
    jiesuan(){
        var gather=[];
        var godid=[];
        var idx=$('.buyinput').length;
        for(var i=0;i<$('.buyinput').length;i++){
            if($('.buyinput')[i].checked){
                var num = $('.number').eq(i).html()
                var gathid = $('.buydiv-1 a span').eq(i).attr("class");
                var ss = {ordernumber:'',goodsid:'',username:'',number:''};
                ss.ordernumber = Math.random()*1000000;
                ss.goodsid = gathid;
                var cookies = document.cookie;
                var username = cookies.slice(8,-1);
                ss.username = username;
                ss.number = num;
                gather.push(ss);
            } else {
                idx--
            }
        }
        if(idx==0){
          alert('亲！还没有选中商品哦');
          return;
        }
          hashHistory.push({
            pathname:'/list1',
            state: godid
        });
          this.props.jiesuan(gather);
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
                                    <input type="checkbox" className="input-buy" onClick={this.Buy}/>
                                    <p>毒物宠店<a className="buya">[满399.0顺风包邮]</a></p>
                                </div>
                                <Link to="shopping"><i className="glyphicon glyphicon-menu-right"></i></Link>
                           </div>
                                <ul className="bul">
                                 {
                                   (this.props.carlist ? this.props.carlist : []).map((item,index)=>{
                                        return (
                                        <li key={'li'+index} className="bli">
                                            <input type="checkbox" className="buyinput" onClick={this.changeInds.bind(this)}/>
                                            <Link to={{
                                                pathname:'detail',
                                                query:{
                                                    id:item.id
                                                }
                                            }}><img src={item.img} className={item.price*item.number}/></Link>
                                            <div className="buydiv-1">
                                                 <Link to={{
                                                pathname:'detail',
                                                query:{
                                                    id:item.id
                                                }
                                            }}>
                                                <span className={item.id}>{item.name}</span>
                                            </Link>
                                                <div className="buyspan2">
                                            <span className="buyspan5">{item.price}元</span>
                                                    <div className="buyspan3">
                                                        <span onClick={this.props.jian.bind(this,index,item.id,this.props.carlist)} onMouseDown={this.minued} className={item.price}>-</span>
                                                        <span className="number">{item.number}</span>
                                                        <span className="buyspan4" onClick={this.props.jia.bind(this,index,item.id)} onMouseDown={this.minus}>+</span>
                                                        <i className={item.price*item.number}></i>
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
                        <input type="checkbox" onClick={this.red} className="Reds"/>
                        <span>全选</span>
                    </li>
                    <li>
                        <span className="buyspan6"><span>总计：</span><span>￥</span><span >(已包邮)</span>
                        </span>
                    </li>
                    <li><button onClick={this.jiesuan.bind(this,'0001')} onMouseDown={this.Funs}>去结算</button>
                    </li>
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