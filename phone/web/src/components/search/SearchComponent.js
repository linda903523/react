import React from 'react';
import {connect} from 'react-redux';
import * as SearchAction from './SearchAction.js';
import Loading from '../../components/spinner/spinner.js';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import './search.scss';
import PopWindowComponent from '../../components/popwindow/PopWindowPomponent.js';

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

class SearchComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            idx: 0,
            show:false,
            key:{},
            showhis:true,
            showPop:false
        };
    }
    back(){
        this.props.router.goBack();
    }
    closePop(){
        this.setState({
            showPop:false
        }) 
    }
    confirm(){
        this.setState({showhis:false,showPop:false})
        this.props.clear({clear:'clear',username:this.props.username})
    }
    clear(){
        this.setState({
            showPop:true
        })
        
    }
    result(){
        var value = document.getElementById('word').value;
        var key = document.getElementsByClassName('title')[0].innerText;
        var addobj={
            add:'add',
            title:key,
            keyword:value,
            username:this.props.username
        }
        this.props.add(addobj)
        hashHistory.push({
            pathname:'/result',
            query:{
                key:key,
                keyword:value
            }
        })
    }
    getidx(idx){
        this.setState({idx:idx,show:false})
    }
    showkey(e){
        if(this.state.show){
            this.setState({show:false})
        }else{
            this.setState({show:true})
        }
    }
    componentDidMount(){
        window.scrollTo(0,0);
        this.props.getHistory(this.props.username);
    }
    render(){
        var lis = this.props.keylist.map((item,idx)=>{
                return <li key={idx} onClick={this.getidx.bind(this,idx)}>{item}</li>
        })
        if(this.state.showhis && this.props.itemset.length>0){
            var hist = this.props.itemset.map((item,idx)=>{
                return <li key={'ss'+idx}>
                    <Link to={
                        {
                            pathname:'/result',
                            query:{
                                key:item.title,
                                keyword:item.keyword
                            }
                        }
                    }>
                        <span>{item.title}</span>:<span>{item.keyword}</span>
                    </Link>
                </li>
            })
            var hst = <div className="history">
                    <div className="ht">
                        <span className="hs">历史搜索</span>
                        <i onClick ={this.clear.bind(this)}><span className="glyphicon glyphicon-trash"></span></i>
                    </div>
                    <ul className="hl">
                        {   
                            hist
                        }
                    </ul>
                </div>
        }

        return(
            <div className="mainsearch">
                <PopWindowComponent show={this.state.showPop} closePop={this.closePop.bind(this)} confirm={this.confirm.bind(this)}/>
                <div className="search_top">
                    <Link onClick={this.back.bind(this)} className="back">﹤</Link>
                    <div className="search">
                        <div className="keyword">
                            <span className="title" onClick={this.showkey.bind(this)}>{this.props.keylist[this.state.idx]}</span>
                            <div className={this.state.show?'keylist keylist1':'keylist'}>
                                    {lis}
                                <ul>
                                </ul>
                            </div>
                        </div>
                        <input type="text" placeholder="搜毒文、商品" id="word"/>
                        <button onClick={this.result.bind(this)}>搜索</button>
                    </div>
                </div>
                {hst}
                <div className="goodsrank">
                    <p className="rank">本周销量排行</p>
                    <div className="boxl">
                        <div className="boxlist">
                            <ul className="ranklist">    
                                <li>
                                    <img src="./src/img/g3.png"/>
                                </li>
                                <li>
                                    <img src="./src/img/g4.png"/>
                                </li>
                                <li>
                                    <img src="./src/img/g5.png"/>
                                </li>
                                <li>
                                    <img src="./src/img/g1.png"/>
                                </li>
                                <li>
                                    <img src="./src/img/g2.png"/>
                                </li>
                                <li>
                                    <img src="./src/img/g3.png"/>
                                </li>
                                <li>
                                    <img src="./src/img/g4.png"/>
                                </li>
                                <li>
                                    <img src="./src/img/g5.png"/>
                                </li>
                                <li>
                                    <img src="./src/img/g1.png"/>
                                </li>
                                <li>
                                    <img src="./src/img/g2.png"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="goodsshow">
                    <p className="show_title">热销商品推荐</p>
                    <div className="rxlist">
                        <ul>
                            <li>
                                <img src="./src/img/g2.png"/>
                                <div>
                                    <p className="rx_title">钢铁侠头盔蓝牙音箱</p>
                                    <p className="rx_xiaoliang">销量:<span className="rx_qty">128</span></p>
                                    <p className="rx_price">200元</p>
                                </div>
                            </li>
                            <li>
                                <img src="./src/img/g3.png"/>
                                <div>
                                    <p className="rx_title">钢铁侠头盔蓝牙音箱</p>
                                    <p className="rx_xiaoliang">销量:<span className="rx_qty">128</span></p>
                                    <p className="rx_price">200元</p>
                                </div>
                            </li>
                            <li>
                                <img src="./src/img/g1.png"/>
                                <div>
                                    <p className="rx_title">钢铁侠头盔蓝牙音箱</p>
                                    <p className="rx_xiaoliang">销量:<span className="rx_qty">128</span></p>
                                    <p className="rx_price">200元</p>
                                </div>
                            </li>
                            <li>
                                <img src="./src/img/g4.png"/>
                                <div>
                                    <p className="rx_title">钢铁侠头盔蓝牙音箱</p>
                                    <p className="rx_xiaoliang">销量:<span className="rx_qty">128</span></p>
                                    <p className="rx_price">200元</p>
                                </div>
                            </li>
                            <li>
                                <img src="./src/img/g5.png"/>
                                <div>
                                    <p className="rx_title">钢铁侠头盔蓝牙音箱</p>
                                    <p className="rx_xiaoliang">销量:<span className="rx_qty">128</span></p>
                                    <p className="rx_price">200元</p>
                                </div>
                            </li>
                            <li>
                                <img src="./src/img/g2.png"/>
                                <div>
                                    <p className="rx_title">钢铁侠头盔蓝牙音箱</p>
                                    <p className="rx_xiaoliang">销量:<span className="rx_qty">128</span></p>
                                    <p className="rx_price">200元</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(state){
    return {
        keylist:['毒文','商品'],
        loading:state.search.loading,
        itemset:state.search.dataset ||[],
        username:username
    }
}

export default connect(mapStateToProps, SearchAction)(SearchComponent);