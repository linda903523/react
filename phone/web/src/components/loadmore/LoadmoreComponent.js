import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as LoadmoreAction from './LoadmoreAction.js';
import Loading from '../../components/spinner/spinner.js';
import './loadmore.scss';
var lastpage = 2;

class LoadmoreComponent extends React.Component{
    componentDidMount(){
        window.scrollTo(0,0);
        this.props.Init(this.props.pageNo,this.props.qty)
        window.onscroll = ()=>{
            var scrollTop = window.scrollY;
            this.props.change(scrollTop);
            if(scrollTop>document.documentElement.scrollHeight - window.innerHeight-15 &&this.props.pageNo==lastpage){
                 this.props.Init(this.props.pageNo,this.props.qty)
                 lastpage++;
            }
        }
    }
    render(){
        return (
            <div>
                <Loading show={this.props.loading} loadmore={true}></Loading>
                <ul className="maincontent">
                    {
                        this.props.dataset1.map((item,idx)=>{
                            return (
                                <li key={'set'+idx}>
                                    <Link to={{
                                        pathname:'article',
                                        query:{id:item.id}
                                    }}>
                                    <p className="mainimage"><img src={item.imgurl}/></p>
                                    <div className="mainbox">
                                        <p className="maintitle">{item.title}</p>
                                        <p className="maincon">{item.content}</p>
                                        <div className="mainqty">
                                            <div className="qty_l">
                                            <p className="mainread">
                                                <span className="glyphicon glyphicon-star-empty"></span>
                                                <span>{Math.ceil(item.readqty/10000)}万+</span>
                                            </p>
                                            <p className="mainzan">
                                                <span className="glyphicon glyphicon-thumbs-up"></span>
                                                <span>{item.zan}</span>
                                            </p>
                                            </div>
                                            <span className="mainto">详情</span>
                                        </div>
                                    </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


const mapStateToProps = function(state){
    return {
        loading: state.loadmore.loading ||  false,
        dataset1: state.loadmore.dataset ||[],
        pageNo:  state.loadmore.pageNo || 1,
        qty:7
    }
}

export default connect(mapStateToProps, LoadmoreAction)(LoadmoreComponent);