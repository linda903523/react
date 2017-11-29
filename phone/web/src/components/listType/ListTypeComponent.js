import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as ListTypeAction from './ListTypeAction.js';

class ListTypeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {type:0};            
    }
    componentWillReceiveProps(newProps){
        if(newProps.params.type && newProps.params.type != this.props.params.type){
            this.setState({type:newProps.params.type});
            this.props.Init(newProps.params);
        }
    }
    componentDidMount(){
        this.props.Init(this.props.params);
        var type = this.props.params.type ? this.props.params.type : '';
        var nav = document.getElementsByTagName('nav')[0];
        var lis = nav.firstChild.children;
        for(var i=0;i<lis.length;i++){
            lis[i].firstChild.style.color = '#bebebe';
        }
        if(type){
            lis[type].firstChild.style.color = '#ea4f25';
        }else{
            lis[0].firstChild.style.color = '#ea4f25';
        }
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
                                        <Link to={'detail/'+obj.id}><img src={obj.img} /></Link>
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