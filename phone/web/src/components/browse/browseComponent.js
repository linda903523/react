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
                        <div className="delete" onClick={this.props.browse3}>清除全部</div>
                    </header>
                    <div className="body">
                        <div className="brdiv">
                            <ul className="bru3">
                                 {
                                   (this.props.br ? this.props.br : []).map(function(item,index){
                                        return (
                                        <li key={'li'+index} className="brli">
                                            <img src={item.img}/>
                                            <p>{item.name}</p>
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