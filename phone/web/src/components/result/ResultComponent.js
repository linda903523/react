import React from 'react';
import {connect} from 'react-redux';
import * as ResultAction from './ResultAction.js';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import Loading from '../../components/spinner/spinner.js';
import './result.scss';

class ResultComponent extends React.Component{
    componentDidMount(){        
        window.scrollTo(0,0);
        var searchObj = this.props.router.location.query;
        this.props.search(searchObj);
    }
    back(){
        this.props.router.goBack();
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
                                        <span>
                                            <span className="glyphicon glyphicon-star-empty"></span>
                                        {Math.ceil(item.readqty/10000)}万
                                        </span>
                                        <span className="zyt">
                                        <span className="glyphicon glyphicon-thumbs-up"></span>
                                        {item.zan}</span>
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
                            pathname:`detail/:${item.id}`,
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
            var lis =<div className="ym_noresult"><h3>无相关信息</h3><p>没有搜索到相关信息</p></div>
        }        
        return (
            <div className="ym-resultroot">
                <Loading show={this.props.loading} load={true}></Loading>
                <div className="result_top">
                    <i onClick={this.back.bind(this)}>＜</i>
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
    return {
        dataset2:state.result.dataset || [],
        loading: state.result.loading || false
    }
}

export default connect(mapStateToProps, ResultAction)(ResultComponent);