import React from 'react';
import {connect} from 'react-redux';
import * as ResultAction from './ResultAction.js';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import './result.scss'
class ResultComponent extends React.Component{
    componentDidMount(){
        
        window.scrollTo(0,0);
        var searchObj = this.props.router.location.query;
        this.props.search(searchObj);
    }
    back(){
        hashHistory.push({
            pathname:'/search'
        })
    }
    render(){
        if(this.props.dataset2.length>0){
            var lis = this.props.dataset2.map((item,idx)=>{
                if(this.props.dataset2[0].zan){
                    return <li key={'ar'+idx} className="resulr_article">
                        <Link to={{
                            pathname:'article',
                            query:{id:item.id}
                        }}>
                            <img src={item.imgurl} className="zt"/>
                            <div className="art_r">
                                <p className="art_title">{item.title}</p>
                                <div className="art_rb">
                                    <img src="./src/img/db.png" className="db"/>
                                    <div>
                                    <p>
                                        <span>{Math.ceil(item.readqty/10000)}万</span>
                                        <span>{item.zan}</span>
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                }
                else if(this.props.dataset2[0].price){
                    return (<li key={'good'+idx}>
                        <Link to={{
                            pathname:'detail',
                            query:{id:item.id}
                        }}>
                            <img src={item.img} className="zt"/>
                            <div>
                                <p className="yh">优惠-走秀</p>
                                <p className="name">{item.name}</p>
                                <p className="price">{item.price}元</p>
                            </div>
                        </Link>
                    </li>)
                }
                
            })
        }else{
            var lis =<h1>抱歉，没有找到你要的东西</h1>
        }
        
        return (
            <div>
                <div className="result_top">
                    <i onClick={this.back}>＜</i>
                    <h3>搜索结果</h3>
                </div>
                <div className="goodsresult">
                    <ul>
                        {lis}
                    </ul>
                </div>
            </div>

        )
    }

}

const mapStateToProps = function(state){
    console.log(state)
    return {
        dataset2:state.result.dataset || [],
        loading: state.result.loading || false
    }
}

export default connect(mapStateToProps, ResultAction)(ResultComponent);