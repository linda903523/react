import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery'

class IndComponent extends React.Component{
    render(){
        return (
            <div className="ind">{this.props.children}</div>
        )
    }
}

export default IndComponent