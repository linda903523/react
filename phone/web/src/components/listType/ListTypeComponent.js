import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as ListTypeAction from './ListTypeAction.js';

class ListTypeComponent extends React.Component{
    componentDidMount(){
        this.props.Init(this.props.params);
    }
    render(){
        return (
            <div>
                <img src="./src/img/banner.png" />            
                <section className="section3">
                    <ul>
                        {
                            (this.props.dataset || []).map(function(obj,idx){
                                return (
                                    <li key={'gar'+idx}>
                                        <Link to={'detail/:'+obj.id}><img src={obj.img} /></Link>
                                        <p>{obj.name}</p>
                                        <strong>{obj.price}元</strong>
                                    </li>                                
                                )
                            })
                        }
                    </ul>
                </section>
            </div>
        )
    }
}

var mapStateToProps = function(state){
    return {
        dataset:state.listType.dataset || []
    }
}

export default connect(mapStateToProps,ListTypeAction)(ListTypeComponent)