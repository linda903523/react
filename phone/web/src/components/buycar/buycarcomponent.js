import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import * as buycarAction from './buycarAction';
import $ from 'jquery';
import './buycar.scss';

function checkAllStatus(){
    var $checkbox = $('.buyinput');
    var $checkedbox = $checkbox.filter(':checked');

    $('.input-buy').prop('checked',$checkbox.length === $checkedbox.length);
    $('.Reds').prop('checked',$checkbox.length === $checkedbox.length);
}
function totalPrice(self){
    var total = 0;
    var $checkbox = $('.buyinput');
    for(var i=0;i<$checkbox.length;i++){
        if($checkbox[i].checked){
            total += $('.number')[i].innerHTML*$('.buyspan5')[i].innerHTML;
        }
    }
    $('.totalprice').html(total.toFixed(2))
    self.setState({
        totalPrice:total
    })
}

var username;
var cookies = document.cookie;
if(cookies.length>0){
    cookies = cookies.split('; ');
    cookies.forEach(function(cookie){
        var temp = cookie.split('=');
        if(temp[0] == 'username'){
            username = temp[1].slice(1,-1);
        }
    })
}
class BuycarComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            totalPrice:[]
        };            
    }
    componentDidMount(){
        this.props.Init4();
        if(username==undefined){
            hashHistory.push({
                pathname:'login'
            })
        }
    }
    back(){
        this.props.router.goBack();
    }
    // 全选反选
    Buy(){
        var total=0;
        if($('.input-buy')[0].checked){
            for(var i=0;i<$('.buyinput').length;i++){
                $('.buyinput')[i].checked = true;
                $('.Reds')[0].checked = true;
                total += $('.number')[i].innerHTML*$('.buyspan5')[i].innerHTML;
            }
            $('.totalprice').html(total.toFixed(2));
            this.setState({
                totalPrice:total
            })
        } else {
            for(var i=0;i<$('.buyinput').length;i++){
                $('.buyinput')[i].checked = false;
            }
            $('.Reds')[0].checked = false;
            $('.totalprice').html('0.00');
            this.setState({
                totalPrice:total
            })
        }
    }
    allcheck(){
        var total=0;
        if($('.Reds')[0].checked){
            for(var i=0;i<$('.buyinput').length;i++){
                $('.buyinput')[i].checked = true;
                $('.input-buy')[0].checked = true;
                total += $('.number')[i].innerHTML*$('.buyspan5')[i].innerHTML;
            }
            $('.totalprice').html(total.toFixed(2));
            this.setState({
                totalPrice:total
            })
        } else {
            for(var i=0;i<$('.buyinput').length;i++){
                $('.buyinput')[i].checked = false;
            }
            $('.input-buy')[0].checked = false;
            $('.totalprice').html('0.00');
            this.setState({
                totalPrice:total
            })
        }
    }
    changeInds(){
        checkAllStatus();
        totalPrice(this)
    }
    jian(idx,id,color,size,username){
        if($('.number')[idx].innerHTML==1){
            return;
        }
        $('.number')[idx].innerHTML =((Number($('.number')[idx].innerHTML)-1));
        this.props.jian(idx,id,color,size,username);
        totalPrice(this);
    }
    addqty(idx){

        $('.number')[idx].innerHTML =((Number($('.number')[idx].innerHTML)+1));
        totalPrice(this);
    }
    jiesuan(){
        var gather=[];
        var godid=[];
        var idx=$('.buyinput').length;
        var ord = Math.ceil(Math.random()*1000000000);
        for(var i=0;i<$('.buyinput').length;i++){
            if($('.buyinput')[i].checked){
                var num = $('.number')[i].innerHTML
                var gathid = $('.buydiv-1 a span').eq(i).attr("data-id");
                var ss = {ordernumber:'',goodsid:'',username:'',number:''};
                ss.goodsid = gathid;
                var cookies = document.cookie;
                var username = this.props.username;
                ss.username = username;
                ss.number = num;
                ss.name = $($('.goodsname')[i]).html();
                ss.color = $('.color')[i].innerHTML;
                ss.size = $('.size')[i].innerHTML;
                ss.imgurl = $($('.imgsrc')[i]).attr('src');
                ss.ordernumber = ord;
                gather.push(ss);
            } else {
                idx--
            }
        }
        var tprice = $('.totalprice').html();
        if(idx==0){
            $('.nochose').fadeIn(300)
            setTimeout(function(){
               $('.nochose').fadeOut(300)
            },2000)
            return;
        }
          hashHistory.push({
            pathname:'/listOrder',
            state: gather,
            query:{totalprice:tprice}
        });        
    }
    closenochose(){
        $('.nochose').fadeOut(300)
    }
    render(){
        if(this.props.carlist.length==0){
            var carList = <div className="bdiv-1">
                <div className="nogoods">
                    <p className="ng">暂无商品</p>
                    <p>快去疯狂采购把</p>
                </div>
            </div>
        }else{
            var carList = <div className="body">
                <div className="bdiv-1">
                     <div className="bdiv-2">
                            <div className="bdiv-shan">
                                <input type="checkbox" className="input-buy" onClick={this.Buy.bind(this)}/>
                                <i className="glyphicon glyphicon-trash shan" onClick={this.props.allshan}></i>
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
                                        <i className="glyphicon glyphicon-trash shan" onClick={this.props.shan.bind(this,this.props.carlist,index)}></i>
                                        <Link to={{
                                            pathname:`detail/:${item.id}`, 
                                        }}><img src={item.img} className="imgsrc"/></Link>
                                        <div className="buydiv-1">
                                             <Link to={{
                                            pathname:`detail/:${item.id}`,
                                        }}>
                                            <span data-id={item.id} className="goodsname">{item.name}</span>
                                        </Link>
                                        <div className="goodstype">颜色:<span className="color">{item.color}</span>  &nbsp;&nbsp;尺寸:<span className="size">{item.size}</span></div>
                                            <div className="buyspan2">
                                            <p>
                                                <span className="buyspan5">{item.price}</span><span>元</span>
                                            </p>
                                                <div className="buyspan3">
                                                    <span onClick={this.jian.bind(this,index,item.id,item.color,item.size,this.props.username)} className={item.price}>-</span>
                                                    <span className="number">{item.number}</span>
                                                    <span className="buyspan4" onClick={this.props.jia.bind(this,index,item.id,item.color,item.size,this.props.username)} onMouseDown={this.addqty.bind(this,index)}>+</span>
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
        }
        if(this.state.totalPrice>399){
            var toprice = <span className="buyspan6"><span>总计:￥<span className="totalprice">0.00</span>(已包邮)</span></span>
        }else{
            var toprice = <span className="buyspan6"><span>总计:￥<span className="totalprice">0.00</span></span></span>
        }
                
        return (
            <div className="xc_container">
                <header className="Oheader">
                    <Link onClick={this.back.bind(this)}>
                    <i className="glyphicon glyphicon-menu-left i12">
                    </i></Link>
                    <div className="Odiv-1"><p>我的购物车</p></div>
                    <button className="bianji" onClick={this.props.bianji}>编辑</button>
                </header>
                {carList}
                <footer className="buyfooter">
                <ul>
                    <li>
                        <input type="checkbox" onClick={this.allcheck.bind(this)} className="Reds"/>
                        <span>全选</span>
                    </li>
                    <li>
                    {toprice}
                    <button onClick={this.jiesuan.bind(this)} onMouseDown={this.Funs}>去结算</button>
                    </li>
                </ul>
                </footer>
                <div className="nochose">
                    <div className="closenochose"><span className="glyphicon glyphicon-remove" onClick={this.closenochose}></span></div>
                    <p>未选择购买商品</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        carlist:state.buycar.dataset || [],
        username:username
    }
}
export default connect(mapStateToProps, buycarAction)(BuycarComponent)