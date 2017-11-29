import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as browseActive from './browseActive'
import './browse.scss'
class BrowseComponent extends React.Component{
    componentDidMount(){
       this.props.browse();
    }
    render(){
        return (
            <div className="xc_container">
                <header className="Oheader">
                    <Link to="my">
                    <i className="glyphicon glyphicon-menu-left i12">
                    </i></Link>
                    <div className="Odiv-1"><p>浏览记录</p></div>
                    <div className="delete" onClick={this.props.browse3}><i className="glyphicon glyphicon-trash"></i>清除全部</div>
                </header>
                <div className="body">
                    <div className="brdiv">
                        <ul className="bru3">
                            {
                               (this.props.br ? this.props.br : []).map((item,index)=>{
                                // (this.props.carlist ? this.props.carlist : []).map((item,index)=>{
                                var offset = Date.parse(new Date()) - Date.parse(item.addTime);
                                var days=Math.floor(offset/(24*3600*1000))
                                    return (
                                    <li key={'li'+index} className="brli">
                                    <div className="Opbox">
                                        <img src={item.img}/>
                                        <div className="Opmin">
                                        <p>{item.name}</p>
                                        {days==0?<p className="timep">昨天</p>:<p className="timep">{days}天前</p>}
                                        </div>
                                        <div onClick = {this.props.browse4.bind(this,item)} className="Opdiv" >删除</div>
                                    </div>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        br: state.br.dataset || [],
    }
}
export default connect(mapStateToProps,browseActive)(BrowseComponent)